export type LoadingStore = {
	loading: Record<string, boolean>;
	setLoading: (key: string, value: boolean) => void;
};
