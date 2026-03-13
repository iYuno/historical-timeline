import { HttpResponse, http } from "msw";
import { timelinePeriods } from "./data/timeline-periods";

export const handlers = [
	http.get("/api/timeline-periods", async () => {
		await new Promise((resolve) => setTimeout(resolve, 500));

		return HttpResponse.json({
			data: timelinePeriods,
		});
	}),
];
