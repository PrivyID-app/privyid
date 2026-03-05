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

  // Recursive proxy that returns appropriate mock functions
  const createMockProxy = (path = "") => {
    return new Proxy(
      {},
      {
        get: (target, prop) => {
          const currentPath = path ? `${path}.${String(prop)}` : String(prop);

          // Handle nested objects
          if (["auth", "storage", "from"].includes(prop)) {
            return createMockProxy(currentPath);
          }

          // Handle onAuthStateChange synchronously
          if (prop === "onAuthStateChange") {
            return () => {
              console.warn(
                `Supabase: Mocking synchronous call to ${currentPath}`,
              );
              return {
                data: {
                  subscription: { unsubscribe: () => {} },
                },
                error: null,
              };
            };
          }

          // Default: Return an async function that logs and returns a mock response
          return async () => {
            console.error(
              `Supabase not initialized (missing API keys). Cannot call: ${currentPath}`,
            );
            return {
              data: {
                session: null,
                user: null,
                publicUrl: "",
              },
              error: new Error(
                `Supabase not initialized. Path: ${currentPath}`,
              ),
            };
          };
        },
      },
    );
  };

  supabaseClient = createMockProxy();
}

export const supabase = supabaseClient;
