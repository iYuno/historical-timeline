import { Flex } from "@shared/ui/flex";
import { T } from "@shared/ui/typography";
import type { TimelineEvent } from "../model/types";

type TimelineEventCardProps = {
	event: TimelineEvent;
};

export const TimelineEventCard = ({ event }: TimelineEventCardProps) => {
	return (
		<Flex direction="column" gap="1rem">
			<T variant="h3" color="textSecondary">
				{event.year}
			</T>
			<T variant="body">{event.description}</T>
		</Flex>
	);
};
