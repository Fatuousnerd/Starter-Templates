import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cklbwzbeejbcmynlnzxo.supabase.co";
const supabaseKey = "sb_publishable_briZUhTERzMPNgy5uA36TQ_dEwP3d7P";
export const supabase = createClient(supabaseUrl, supabaseKey, {
	auth: {
		flowType: "pkce",
		detectSessionInUrl: true,
		autoRefreshToken: true,
		persistSession: true,
	},
});
