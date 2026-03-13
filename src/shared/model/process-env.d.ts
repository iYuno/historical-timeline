declare namespace NodeJS {
	interface ProcessEnv {
		API_BASE_URL?: string;
		MOCK_API?: "enabled" | "disabled";
		NODE_ENV?: "development" | "production" | "test";
	}
}
