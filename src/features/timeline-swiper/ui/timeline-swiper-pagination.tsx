import type { FC } from "react";
import { useTimelineSwiperContext } from "./timeline-swiper.context";
import { StyledTimelineSwiperPagination } from "./timeline-swiper.styles";
import type { TimelineSwiperPaginationProps } from "./timeline-swiper.types";

export const TimelineSwiperPagination: FC<TimelineSwiperPaginationProps> = (props) => {
	const { paginationId } = useTimelineSwiperContext();

	return <StyledTimelineSwiperPagination id={`swiper-pagination-${paginationId}`} {...props} />;
};
