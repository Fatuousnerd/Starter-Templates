import type { PostgrestError } from "@supabase/supabase-js";
import type { AxiosError } from "axios";

export interface ThemeType {
	theme: string;
	toggleTheme: () => void;
}

export type LoadingState = {
	loading: Record<string, boolean>;
	setLoading: (key: string, value: boolean) => void;
};

export type ErrorType = PostgrestError | AxiosError | TypeError | string | null;

export type ErrorState = {
	err: Record<string, ErrorType>;
	setErr: (key: string, value: ErrorType) => void;
};
