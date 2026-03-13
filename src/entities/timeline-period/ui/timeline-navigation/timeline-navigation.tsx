import { Button } from "@shared/ui/button";
import { Flex } from "@shared/ui/flex";
import { T } from "@shared/ui/typography";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { FC } from "react";
import { useTimelineNavigation } from "../../model/useTimelineNavigation";
import { StyledFlexContainer } from "./timeline-navigation.styles";
import type { TimelineNavigationProps } from "./timeline-navigation.types";

export const TimelineNavigation: FC<TimelineNavigationProps> = (props) => {
	const {
		isLoading,
		paginationCurrentLabel,
		paginationLabelAll,
		handleNextTimeline,
		handlePrevTimeline,
	} = props;
	const { leftRef, rightRef } = useTimelineNavigation(props);

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
				<Button
					size="icon-md"
					onClick={handlePrevTimeline}
					aria-label="Предыдущий период"
					disabled={isLoading}
				>
					<ChevronLeft aria-hidden="true" />
				</Button>

				<Button
					size="icon-md"
					onClick={handleNextTimeline}
					aria-label="Следующий период"
					disabled={isLoading}
				>
					<ChevronRight aria-hidden="true" />
				</Button>
			</StyledFlexContainer>
		</Flex>
	);
};
