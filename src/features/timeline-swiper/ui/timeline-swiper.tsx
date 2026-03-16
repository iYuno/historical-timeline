import { type FC, useId, useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { useAnimatedSwiperContent } from "../model/useAnimatedSwiperContent";
import { TimelineSwiperContext } from "./timeline-swiper.context";
import { StyledFlexContainer } from "./timeline-swiper.styles";
import type { TimelineSwiperCompoundComponent, TimelineSwiperProps } from "./timeline-swiper.types";
import { TimelineSwiperAnimatedContainer } from "./timeline-swiper-animated-container";
import { TimelineSwiperNavigation } from "./timeline-swiper-navigation";
import { TimelineSwiperPagination } from "./timeline-swiper-pagination";

const TimelineSwiperRoot: FC<TimelineSwiperProps> = ({
	events,
	isLoading,
	children,
	outsideChildren,
}) => {
	const swiperRef = useRef<SwiperType | null>(null);
	const paginationId = useId().replace(/:/g, "");
	const { containerRef, renderedEvents } = useAnimatedSwiperContent({
		events,
		isLoading,
		swiperRef,
	});

	return (
		<TimelineSwiperContext.Provider
			value={{
				paginationId,
				containerRef,
				renderedEvents,
				setSwiperInstance: (swiper) => {
					swiperRef.current = swiper;
				},
			}}
		>
			<StyledFlexContainer position="relative" direction="column">
				{children}
			</StyledFlexContainer>

			{outsideChildren}
		</TimelineSwiperContext.Provider>
	);
};

export const TimelineSwiper = Object.assign(TimelineSwiperRoot, {
	Pagination: TimelineSwiperPagination,
	Navigation: TimelineSwiperNavigation,
	AnimatedContainer: TimelineSwiperAnimatedContainer,
}) as TimelineSwiperCompoundComponent;
