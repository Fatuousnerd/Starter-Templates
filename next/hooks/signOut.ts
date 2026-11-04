import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { createSupabaseClient } from "@/lib/supabase/client";

type Props = {
	router: AppRouterInstance;
	scope: "local" | "global" | "others";
};

export async function signOut({ router, scope }: Props) {
	const supabase = createSupabaseClient();

	const { error } = await supabase.auth.signOut({ scope });

	if (error) throw error;

	if (scope !== "others") router.push("/auth");
}
