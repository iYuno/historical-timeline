import { TimelineEventCard } from "@entities/timeline-event";
import type { FC } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";
import { useTimelineSwiperContext } from "./timeline-swiper.context";
import { StyledSwiperSlide, SwiperAnimatedContainer } from "./timeline-swiper.styles";
import type { TimelineSwiperAnimatedContainerProps } from "./timeline-swiper.types";

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

export const TimelineSwiperAnimatedContainer: FC<TimelineSwiperAnimatedContainerProps> = (
	props,
) => {
	const { paginationId, containerRef, renderedEvents, setSwiperInstance } =
		useTimelineSwiperContext();

	return (
		<SwiperAnimatedContainer ref={containerRef} {...props}>
			<Swiper
				onSwiper={setSwiperInstance}
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
	);
};
