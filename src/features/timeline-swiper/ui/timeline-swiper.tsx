import { TimelineEventCard } from "@entities/timeline-event";
import { Button } from "@shared/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { type FC, useId, useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";
import { useAnimatedSwiperContent } from "../model/useAnimatedSwiperContent";
import { TimelineSwiperContext } from "./timeline-swiper.context";
import {
	StyledFlexContainer,
	StyledFlexNavigation,
	StyledSwiperSlide,
	SwiperAnimatedContainer,
} from "./timeline-swiper.styles";
import type { TimelineSwiperCompoundComponent, TimelineSwiperProps } from "./timeline-swiper.types";
import { TimelineSwiperPagination } from "./timeline-swiper-pagination";

const SWIPER_BREAKPOINTS = {
	320: {
		slidesPerView: 1,
		spaceBetween: 25,
		slidesOffsetAfter: 134,
	},
	430: {
		slidesPerView: 1,
		slidesOffsetAfter: 164,
		spaceBetween: 25,
	},
	768: {
		slidesPerView: 2,
		spaceBetween: 40,
		slidesOffsetAfter: 0,
	},
	1024: {
		slidesPerView: 3,
		spaceBetween: 40,
		slidesOffsetAfter: 0,
	},
	1200: {
		slidesPerView: 3,
		spaceBetween: 60,
		slidesOffsetAfter: 0,
	},
	1440: {
		slidesPerView: 3,
		spaceBetween: 80,
		slidesOffsetAfter: 0,
	},
};

const TimelineSwiperRoot: FC<TimelineSwiperProps> = ({ events, isLoading, children }) => {
	const swiperRef = useRef<SwiperType | null>(null);
	const paginationId = useId().replace(/:/g, "");
	const { containerRef, renderedEvents } = useAnimatedSwiperContent({
		events,
		isLoading,
		swiperRef,
	});

	return (
		<TimelineSwiperContext.Provider value={{ paginationId }}>
			<StyledFlexContainer position="relative" direction="column">
				<StyledFlexNavigation position="absolute">
					<Button
						size="icon-sm"
						className="swiper-prev"
						variant="ghost"
						aria-label="Предыдущие события"
					>
						<ChevronLeft aria-hidden="true" />
					</Button>
					<Button
						size="icon-sm"
						className="swiper-next"
						variant="ghost"
						aria-label="Следующие события"
					>
						<ChevronRight aria-hidden="true" />
					</Button>
				</StyledFlexNavigation>

				<SwiperAnimatedContainer ref={containerRef}>
					<Swiper
						onSwiper={(swiper) => {
							swiperRef.current = swiper;
						}}
						modules={[Navigation, Pagination]}
						pagination={{
							el: `#swiper-pagination-${paginationId}`,
							clickable: true,
						}}
						navigation={{
							prevEl: ".swiper-prev",
							nextEl: ".swiper-next",
						}}
						breakpoints={SWIPER_BREAKPOINTS}
						centeredSlides={false}
						centerInsufficientSlides={false}
						watchOverflow
					>
						{renderedEvents.map((eventItem) => {
							return (
								<StyledSwiperSlide key={eventItem.id}>
									<TimelineEventCard event={eventItem} />
								</StyledSwiperSlide>
							);
						})}
					</Swiper>
				</SwiperAnimatedContainer>
			</StyledFlexContainer>

			{children}
		</TimelineSwiperContext.Provider>
	);
};

export const TimelineSwiper = Object.assign(TimelineSwiperRoot, {
	Pagination: TimelineSwiperPagination,
}) as TimelineSwiperCompoundComponent;
