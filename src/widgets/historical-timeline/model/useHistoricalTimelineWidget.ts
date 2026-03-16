import type { TimelinePeriod } from "@entities/timeline-period";
import { useCallback, useState } from "react";

export function useHistoricalTimelineWidget(periods: TimelinePeriod[]) {
	const [activeIndex, setActiveIndex] = useState(0);

	const total = periods.length;
	const activePeriod = periods[activeIndex];

	const handlePrevTimeline = useCallback(() => {
		if (!total) return;

		setActiveIndex((prev) => (prev - 1 + total) % total);
	}, [total]);

	const handleNextTimeline = useCallback(() => {
		if (!total) return;

		setActiveIndex((prev) => (prev + 1) % total);
	}, [total]);

	return {
		activeIndex,
		setActiveIndex,
		handleNextTimeline,
		handlePrevTimeline,
		activePeriod,
	};
}
