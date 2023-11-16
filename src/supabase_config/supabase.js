import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://juxmwafuwvzqmkyemcpk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1eG13YWZ1d3Z6cW1reWVtY3BrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAwOTcyNTcsImV4cCI6MjAxNTY3MzI1N30.TdkUGs1QHiq22W4y9WrfM1vfosnO9AWA00psEfN2C8c";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
