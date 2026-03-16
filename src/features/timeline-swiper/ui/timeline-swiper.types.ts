import type { TimelineEvent } from "@entities/timeline-event";
import type { ComponentPropsWithoutRef, FC, ReactNode, RefObject } from "react";
import type { Swiper as SwiperType } from "swiper";
import type { StyledFlexNavigation, SwiperAnimatedContainer } from "./timeline-swiper.styles";

export type TimelineSwiperProps = {
	events: TimelineEvent[];
	isLoading: boolean;
	children?: ReactNode;
	outsideChildren?: ReactNode;
};

export type TimelineSwiperPaginationProps = ComponentPropsWithoutRef<"div">;

export type TimelineSwiperNavigationProps = Omit<
	ComponentPropsWithoutRef<typeof StyledFlexNavigation>,
	"children"
>;

export type TimelineSwiperAnimatedContainerProps = Omit<
	ComponentPropsWithoutRef<typeof SwiperAnimatedContainer>,
	"children"
>;

export type TimelineSwiperContextValue = {
	paginationId: string;
	containerRef: RefObject<HTMLDivElement | null>;
	renderedEvents: TimelineEvent[];
	setSwiperInstance: (swiper: SwiperType) => void;
};

export type TimelineSwiperCompoundComponent = FC<TimelineSwiperProps> & {
	Pagination: FC<TimelineSwiperPaginationProps>;
	Navigation: FC<TimelineSwiperNavigationProps>;
	AnimatedContainer: FC<TimelineSwiperAnimatedContainerProps>;
};
