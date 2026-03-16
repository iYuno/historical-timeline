import { createContext, useContext } from "react";
import type { TimelineSwiperContextValue } from "./timeline-swiper.types";

export const TimelineSwiperContext = createContext<TimelineSwiperContextValue | null>(null);

export const useTimelineSwiperContext = () => {
	const context = useContext(TimelineSwiperContext);

	if (!context) {
		throw new Error("TimelineSwiper.Pagination должен быть использован внутри TimelineSwiper.");
	}

	return context;
};
