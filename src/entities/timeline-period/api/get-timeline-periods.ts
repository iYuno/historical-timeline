import { axiosClient } from "@shared/api";
import type { GetTimelinePeriodsResponse } from "../model/types";

export const getTimelinePeriods = async (): Promise<GetTimelinePeriodsResponse> => {
	const { data } = await axiosClient.get<GetTimelinePeriodsResponse>("/api/timeline-periods");

	return data;
};
