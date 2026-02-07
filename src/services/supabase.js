import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://phlkbcxiqwkconnumsvo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBobGtiY3hpcXdrY29ubnVtc3ZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2MDIwMjQsImV4cCI6MjA4NTE3ODAyNH0.UzwUI3sIPcCKdMBmiCZaPxKTOZFcumXfXwnAOddfvZo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
