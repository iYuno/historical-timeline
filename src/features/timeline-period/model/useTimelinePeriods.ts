import { getTimelinePeriods, type TimelinePeriod } from "@entities/timeline-period";
import { useQuery } from "@tanstack/react-query";

type UseTimelinePeriodsResult = {
	data: TimelinePeriod[];
	isLoading: boolean;
	isError: boolean;
};

export const useTimelinePeriods = (): UseTimelinePeriodsResult => {
	const query = useQuery({
		queryKey: ["timeline-periods"],
		queryFn: getTimelinePeriods,
	});

	return {
		data: query.data?.data ?? [],
		isLoading: query.isLoading,
		isError: query.isError,
	};
};
