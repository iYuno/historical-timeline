const trimTrailingSlash = (value: string) => value.replace(/\/+$/, "") || "/";

const apiBaseUrl = process.env.API_BASE_URL ? trimTrailingSlash(process.env.API_BASE_URL) : "/";

export const env = {
	apiBaseUrl,
	isDevelopment: process.env.NODE_ENV === "development",
	mockApiEnabled: process.env.MOCK_API !== "disabled",
} as const;
