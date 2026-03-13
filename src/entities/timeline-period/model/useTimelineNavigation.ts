import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useCallback, useRef } from "react";
import type { TimelineNavigationProps } from "../ui/timeline-navigation/timeline-navigation.types";
import { getAnimationTiming } from "./math";

interface Props
	extends Pick<
		TimelineNavigationProps,
		"isLoading" | "setPaginationCurrentLabel" | "activeIndex" | "paginationCurrentLabel"
	> {}

export function useTimelineNavigation(props: Props) {
	const { isLoading, setPaginationCurrentLabel, activeIndex, paginationCurrentLabel } = props;
	const leftRef = useRef(null);
	const rightRef = useRef(null);
	const queueRef = useRef<number[]>([]);
	const isAnimatingRef = useRef(false);

	const playAnimation = useCallback(
		(nextIndex: number) => {
			const node = leftRef.current;
			if (!node || isLoading) return;

			isAnimatingRef.current = true;
			const timing = getAnimationTiming(queueRef.current.length);

			const tl = gsap.timeline({
				onComplete: () => {
					const nextQueuedIndex = queueRef.current.shift();
					if (nextQueuedIndex !== undefined) {
						playAnimation(nextQueuedIndex);
						return;
					}

					isAnimatingRef.current = false;
				},
			});

			tl.to(node, {
				y: -timing.offsetY,
				opacity: 0,
				duration: timing.out,
				ease: "power3.in",
				onComplete: () => {
					setPaginationCurrentLabel(String(nextIndex + 1).padStart(2, "0"));
				},
			})
				.set(node, {
					y: timing.offsetY,
				})
				.to(node, {
					y: 0,
					opacity: 1,
					duration: timing.in,
					ease: "power3.out",
				});
		},
		[isLoading, setPaginationCurrentLabel],
	);

	useGSAP(
		() => {
			if (isLoading) return;
			const nextLabel = String(activeIndex + 1).padStart(2, "0");

			if (paginationCurrentLabel === nextLabel && !isAnimatingRef.current) {
				return;
			}

			if (isAnimatingRef.current) {
				queueRef.current.push(activeIndex);
				return;
			}
			playAnimation(activeIndex);
		},
		{ dependencies: [activeIndex, isLoading], revertOnUpdate: false },
	);

	useGSAP(
		() => {
			const leftNode = leftRef.current;
			const rightNode = rightRef.current;

			if (!leftNode || !rightNode || isLoading) {
				return;
			}

			gsap.killTweensOf([leftNode, rightNode]);

			const tl = gsap.timeline();

			tl.to([leftNode, rightNode], {
				y: -8,
				opacity: 0,
				duration: 0.18,
				ease: "power3.in",
				onComplete: () => {
					setPaginationCurrentLabel(String(activeIndex + 1).padStart(2, "0"));
				},
			})
				.set([leftNode, rightNode], {
					y: 8,
				})
				.to([leftNode, rightNode], {
					y: 0,
					opacity: 1,
					duration: 0.22,
					ease: "power3.out",
				});
		},
		{
			dependencies: [isLoading],
			revertOnUpdate: false,
		},
	);

	return { leftRef, rightRef };
}
