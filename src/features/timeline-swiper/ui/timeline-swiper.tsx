import { type TimelineEvent, TimelineEventCard } from "@entities/timeline-event";
import { Button } from "@shared/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { type FC, useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useAnimatedSwiperContent } from "../model/useAnimatedSwiperContent";
import {
	StyledFlexContainer,
	StyledFlexNavigation,
	SwiperAnimatedContainer,
} from "./timeline-swiper.styles";

const SWIPER_BREACKPOINTS = {
	320: {
		slidesPerView: 1,
		spaceBetween: 25,
	},
	768: {
		slidesPerView: 2,
		spaceBetween: 40,
	},
	1024: {
		slidesPerView: 3,
		spaceBetween: 40,
	},
	1200: {
		slidesPerView: 3,
		spaceBetween: 60,
	},
	1440: {
		slidesPerView: 3,
		spaceBetween: 80,
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
				<Button size="icon-sm" className="swiper-prev" variant="ghost">
					<ChevronLeft />
				</Button>
				<Button size="icon-sm" className="swiper-next" variant="ghost">
					<ChevronRight />
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
					breakpoints={SWIPER_BREACKPOINTS}
				>
					{renderedEvents?.map((it) => {
						return (
							<SwiperSlide key={it.id}>
								<TimelineEventCard event={it} />
							</SwiperSlide>
						);
					})}
				</Swiper>
			</SwiperAnimatedContainer>
		</StyledFlexContainer>
	);
};
