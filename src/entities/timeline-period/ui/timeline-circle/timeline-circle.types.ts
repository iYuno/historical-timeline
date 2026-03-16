export type TimelineCirclePoint = {
	id: string;
	label: string;
};

export type TimelineCircleProps = {
	points: TimelineCirclePoint[];
	activeIndex: number;
	onChange: (nextIndex: number) => void;
};
