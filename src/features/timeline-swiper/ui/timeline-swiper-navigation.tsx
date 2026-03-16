import { Button } from "@shared/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { FC } from "react";
import { StyledFlexNavigation } from "./timeline-swiper.styles";
import type { TimelineSwiperNavigationProps } from "./timeline-swiper.types";

export const TimelineSwiperNavigation: FC<TimelineSwiperNavigationProps> = (props) => {
	return (
		<StyledFlexNavigation position="absolute" {...props}>
			<Button
				size="icon-sm"
				className="swiper-prev"
				variant="ghost"
				aria-label="Предыдущие события"
			>
				<ChevronLeft aria-hidden="true" />
			</Button>
			<Button size="icon-sm" className="swiper-next" variant="ghost" aria-label="Следующие события">
				<ChevronRight aria-hidden="true" />
			</Button>
		</StyledFlexNavigation>
	);
};
