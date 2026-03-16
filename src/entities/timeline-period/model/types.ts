import type { TimelineEvent } from "@entities/timeline-event/@x/timeline-period";

export interface TimelinePeriod {
	id: string;
	label: string;
	startYear: number;
	endYear: number;
	events: TimelineEvent[];
}

export type GetTimelinePeriodsResponse = {
	data: TimelinePeriod[];
};
