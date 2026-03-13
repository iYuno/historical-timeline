import { type TimelineEvent, TimelineEventCard } from "@entities/timeline-event";
import { Button } from "@shared/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { type FC, useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";
import { useAnimatedSwiperContent } from "../model/useAnimatedSwiperContent";
import {
	StyledFlexContainer,
	StyledFlexNavigation,
	StyledSwiperSlide,
	SwiperAnimatedContainer,
} from "./timeline-swiper.styles";

const SWIPER_BREAKPOINTS = {
	320: {
		slidesPerView: 1,
		spaceBetween: 25,
		slidesOffsetAfter: 110,
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

export const TimelineSwiper: FC<{
	events: TimelineEvent[];
	isLoading: boolean;
	paginationId?: string;
}> = ({ events, isLoading, paginationId }) => {
	const swiperRef = useRef<SwiperType | null>(null);
	const { containerRef, renderedEvents } = useAnimatedSwiperContent({
		events,
		isLoading,
		swiperRef,
	});

	return (
		<StyledFlexContainer position="relative">
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
	);
};
