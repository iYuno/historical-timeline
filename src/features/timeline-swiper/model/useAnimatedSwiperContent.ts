import type { TimelineEvent } from "@entities/timeline-event";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";

type UseAnimatedSwiperContentParams = {
	events: TimelineEvent[];
	isLoading: boolean;
	duration?: number;
	swiperRef?: React.RefObject<SwiperType | null>;
};

type UseAnimatedSwiperContentResult = {
	containerRef: React.RefObject<HTMLDivElement | null>;
	renderedEvents: TimelineEvent[];
};

export function useAnimatedSwiperContent({
	events,
	isLoading,
	duration = 1.5,
	swiperRef,
}: UseAnimatedSwiperContentParams): UseAnimatedSwiperContentResult {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const [renderedEvents, setRenderedEvents] = useState(events);
	const prevEventsRef = useRef(events);

	useGSAP(
		() => {
			const node = containerRef.current;
			if (!node || isLoading) {
				return;
			}

			gsap.killTweensOf(node);

			gsap.to(node, {
				opacity: 0,
				duration: duration / 6,
				ease: "power3.in",
				onComplete: () => {
					setRenderedEvents(events);
					prevEventsRef.current = events;

					requestAnimationFrame(() => {
						if (swiperRef?.current) {
							swiperRef?.current?.slideTo(0, 0);
							swiperRef?.current?.update();
						}
					});

					gsap.fromTo(
						node,
						{ opacity: 0, y: 10 },
						{
							opacity: 1,
							y: 0,
							duration: duration / 3,
							delay: duration / 2,
							ease: "power3.out",
						},
					);
				},
			});
		},
		{
			dependencies: [events, isLoading, duration],
			revertOnUpdate: false,
		},
	);

	return {
		containerRef,
		renderedEvents,
	};
}
