import type { TimelineEvent } from "@entities/timeline-event";
import type { ComponentPropsWithoutRef, FC, ReactNode } from "react";

export type TimelineSwiperProps = {
	events: TimelineEvent[];
	isLoading: boolean;
	children?: ReactNode;
};

export type TimelineSwiperPaginationProps = ComponentPropsWithoutRef<"div">;

export type TimelineSwiperContextValue = {
	paginationId: string;
};

export type TimelineSwiperCompoundComponent = FC<TimelineSwiperProps> & {
	Pagination: FC<TimelineSwiperPaginationProps>;
};
