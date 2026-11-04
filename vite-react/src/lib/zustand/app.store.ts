import { create } from "zustand";
import type { LoadingStore } from "@/config/Types/store.types";

export const useLoading = create<LoadingStore>((set) => ({
	loading: { user: true },
	setLoading: (key, value) =>
		set((state) => ({ loading: { ...state.loading, [key]: value } })),
}));
