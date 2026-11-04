"use client";

import type { User } from "@supabase/supabase-js";
import { useEffect, useMemo, useState } from "react";
import { createSupabaseClient } from "@/lib/supabase/client";
import { useLoading } from "@/lib/zustand/stores";

export function useUser() {
	const supabase = useMemo(() => createSupabaseClient(), []);

	const [user, setUser] = useState<User | null>(null);
	const setLoad = useLoading((s) => s.setLoading);

	useEffect(() => {
		(async () => {
			setLoad("user", true);
			try {
				const { data, error } = await supabase.auth.getUser();
				setUser(data.user);

				if (error) setUser(null);
			} catch (error) {
				console.error("Auth error:", error);
				setUser(null);
			} finally {
				// if (user !== null)
				setLoad("user", false);
			}
		})();
	}, [setLoad, supabase.auth]);

	return { user };
}
