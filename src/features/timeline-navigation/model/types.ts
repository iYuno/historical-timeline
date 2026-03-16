export type TimelineNavigationProps = {
	isLoading: boolean;
	activeIndex: number;
	total: number;
	onPrev: () => void;
	onNext: () => void;
};
