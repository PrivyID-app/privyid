import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
dotenv.config();

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY in .env");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function diagnose() {
  console.log("--- Database Diagnosis ---");

  const { count: mCount, error: mError } = await supabase
    .from("merchants")
    .select("*", { count: "exact", head: true });
  console.log("Merchants Count:", mCount, mError || "");

  const { data: vData, error: vError } = await supabase
    .from("verifications")
    .select("*")
    .limit(5);
  console.log(
    "Verifications Count (Limited to 5):",
    vData?.length,
    vError || "",
  );
  if (vData?.length > 0) {
    console.log("Sample Verification:", JSON.stringify(vData[0], null, 2));
  }

  const { data: tData, error: tError } = await supabase
    .from("tickets")
    .select("*")
    .limit(5);
  console.log("Tickets Count (Limited to 5):", tData?.length, tError || "");
}

diagnose();
