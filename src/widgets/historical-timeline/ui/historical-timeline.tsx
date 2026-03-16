import { TimelineCircle, useTimelinePeriods } from "@entities/timeline-period";
import { TimelineNavigation } from "@features/timeline-navigation";
import { TimelineSwiper } from "@features/timeline-swiper";
import { useAnimatedNumber } from "@shared/lib/useAnimatedNumber";
import { Flex } from "@shared/ui/flex";
import { Line } from "@shared/ui/line";
import { T } from "@shared/ui/typography";
import { type FC, useEffect } from "react";
import { useHistoricalTimelineWidget } from "../model/useHistoricalTimelineWidget";
import { StyledMainContainer } from "./historical-timeline.styles";

export const HistoricalTimeline: FC = () => {
	const { data: periods, isLoading } = useTimelinePeriods();
	const { activeIndex, setActiveIndex, handlePrevTimeline, handleNextTimeline, activePeriod } =
		useHistoricalTimelineWidget(periods);

	const animatedStartYear = useAnimatedNumber(activePeriod?.startYear ?? 0);
	const animatedEndYear = useAnimatedNumber(activePeriod?.endYear ?? 0);

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (isLoading) return;
			if (event.key === "ArrowLeft") {
				event.preventDefault();
				handlePrevTimeline();
			}
			if (event.key === "ArrowRight") {
				event.preventDefault();
				handleNextTimeline();
			}
		};
		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [isLoading, handleNextTimeline, handlePrevTimeline]);

	return (
		<StyledMainContainer
			direction="column"
			position="relative"
			tabIndex={0}
			aria-label="Историческая шкала времени"
		>
			<Line direction="vertical" attach="left" />
			<Line direction="vertical" attach="right" />
			<Line direction="vertical" attach="center" />

			<Flex align="center" position="relative" className="title">
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

			<TimelineNavigation
				isLoading={isLoading}
				activeIndex={activeIndex}
				total={periods.length}
				onPrev={handlePrevTimeline}
				onNext={handleNextTimeline}
			/>

			<TimelineSwiper events={activePeriod?.events ?? []} isLoading={isLoading}>
				<TimelineSwiper.Pagination />
			</TimelineSwiper>
		</StyledMainContainer>
	);
};
