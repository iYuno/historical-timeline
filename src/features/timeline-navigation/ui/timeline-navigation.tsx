import { Button } from "@shared/ui/button";
import { Flex } from "@shared/ui/flex";
import { T } from "@shared/ui/typography";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { FC } from "react";
import type { TimelineNavigationProps } from "../model/types";
import { useTimelineNavigation } from "../model/useTimelineNavigation";
import { StyledFlexContainer } from "./timeline-navigation.styles";

export const TimelineNavigation: FC<TimelineNavigationProps> = ({
	isLoading,
	activeIndex,
	total,
	onPrev,
	onNext,
}) => {
	const { leftRef, rightRef, paginationCurrentLabel, paginationLabelAll } = useTimelineNavigation({
		isLoading,
		activeIndex,
		total,
	});

	return (
		<Flex direction="column" className="timeline-navigation">
			<Flex>
				<T variant="caption" className="pagination" ref={leftRef}>
					{paginationCurrentLabel}
				</T>
				<T variant="caption" className="pagination">
					/
				</T>
				<T variant="caption" className="pagination" ref={rightRef}>
					{paginationLabelAll}
				</T>
			</Flex>

			<StyledFlexContainer>
				<Button size="icon-md" onClick={onPrev} aria-label="Предыдущий период" disabled={isLoading}>
					<ChevronLeft aria-hidden="true" />
				</Button>

				<Button size="icon-md" onClick={onNext} aria-label="Следующий период" disabled={isLoading}>
					<ChevronRight aria-hidden="true" />
				</Button>
			</StyledFlexContainer>
		</Flex>
	);
};
