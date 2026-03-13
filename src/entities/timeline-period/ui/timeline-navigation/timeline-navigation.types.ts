export type TimelineNavigationProps = {
	isLoading: boolean;
	paginationCurrentLabel: string;
	paginationLabelAll: string;
	setPaginationCurrentLabel: (ant: string) => void;
	handlePrevTimeline: () => void;
	handleNextTimeline: () => void;
	activeIndex: number;
};
