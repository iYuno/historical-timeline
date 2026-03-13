import type { TimelineEvent } from "@entities/timeline-event/@x/timeline-period";

export interface TimelinePeriod {
	id: string;
	label: string;
	startYear: number;
	endYear: number;
	events: TimelineEvent[];
}

export interface CirclePoint {
	id: string;
	label: string;
}

export interface CircleProps {
	points: CirclePoint[];
	activeIndex: number;
	onChange: (nextIndex: number) => void;
}

export type GetTimelinePeriodsResponse = {
	data: TimelinePeriod[];
};
