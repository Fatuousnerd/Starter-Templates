"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useLoading } from "@/lib/zustand/stores";
import { useUser } from "./useUser";

export function useRedirect(redirectPath?: string) {
	const router = useRouter();
	const pathname = usePathname();

	const { user } = useUser();
	const userLoading = useLoading((s) => s.loading.user);

	useEffect(() => {
		if (userLoading) return;

		if (!user) {
			router.push(redirectPath ?? "/auth");
			return;
		}

		if (pathname === "/auth") {
			router.push("/chat");
			return;
		}
	}, [user, userLoading, pathname, redirectPath, router]);
}
