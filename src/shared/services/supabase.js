import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY || "placeholder-anon-key";

const isMissingCreds =
  !import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY;

if (isMissingCreds) {
  console.warn(
    "⚠️ Supabase credentials missing! Create a .env file with:\n" +
      "VITE_SUPABASE_URL=your_supabase_url\n" +
      "VITE_SUPABASE_ANON_KEY=your_anon_key",
  );
}

// Create client but handle errors gracefully
let supabaseClient;
try {
  supabaseClient = createClient(supabaseUrl, supabaseAnonKey);
} catch (err) {
  console.error("Failed to initialize Supabase client:", err);
  // Fallback to a proxy that logs errors instead of crashing
  supabaseClient = new Proxy(
    {},
    {
      get: (target, prop) => {
        return () => {
          console.error(`Supabase not initialized. Cannot call: ${prop}`);
          return { data: null, error: new Error("Supabase not initialized") };
        };
      },
    },
  );
}

export const supabase = supabaseClient;
