import { TimelineCircle, TinelineNavigation } from "@entities/timeline-period";
import { useTimelinePeriods } from "@features/timeline-period";
import { TimeineSwiperPagination, TimelineSwiper } from "@features/timeline-swiper";
import { useAnimatedNumber } from "@shared/lib/useAnimatedNumber";
import { Flex } from "@shared/ui/flex";
import { Line } from "@shared/ui/line";
import { T } from "@shared/ui/typography";
import { type FC, useId } from "react";
import { useHistoricalTimelineWidget } from "../model/useHistoricalTimelineWidget";
import { Divider, StyledMainContainer } from "./historical-timeline.styles";

export const HistoricalTimeline: FC = () => {
	const { data: periods, isLoading } = useTimelinePeriods();
	const {
		activeIndex,
		setActiveIndex,
		paginationCurrentLabel,
		setPaginationCurrentLabel,
		paginationLabelAll,
		handlePrevTimeline,
		handleNextTimeline,
		activePeriod,
	} = useHistoricalTimelineWidget(periods);

	const animatedStartYear = useAnimatedNumber(activePeriod?.startYear ?? 0);
	const animatedEndYear = useAnimatedNumber(activePeriod?.endYear ?? 0);

	const paginationId = useId().replace(/:/g, "");

	return (
		<StyledMainContainer direction="column" position="relative">
			<Line direction="vertical" attach="left" />
			<Line direction="vertical" attach="right" />
			<Line direction="vertical" attach="center" />

			<Flex align="center" position="relative">
				<Divider className="divider" />
				<T as="h2" variant="h2">
					Исторические <br /> даты
				</T>
			</Flex>

			<Flex position="relative" className="years">
				<TimelineCircle points={periods} activeIndex={activeIndex} onChange={setActiveIndex} />

				<Line direction="horizontal" attach="center" />

				<T as="h1" variant="h1" color="accent">
					{animatedStartYear}
				</T>
				<T as="h1" variant="h1" color="secondary">
					{animatedEndYear}
				</T>
			</Flex>
			<TinelineNavigation
				isLoading={isLoading}
				paginationCurrentLabel={paginationCurrentLabel}
				paginationLabelAll={paginationLabelAll}
				setPaginationCurrentLabel={setPaginationCurrentLabel}
				handlePrevTimeline={handlePrevTimeline}
				handleNextTimeline={handleNextTimeline}
				activeIndex={activeIndex}
			/>

			<TimelineSwiper
				paginationId={paginationId}
				events={activePeriod?.events}
				isLoading={isLoading}
			/>
			<TimeineSwiperPagination id={`swiper-pagination-${paginationId}`} />
		</StyledMainContainer>
	);
};
