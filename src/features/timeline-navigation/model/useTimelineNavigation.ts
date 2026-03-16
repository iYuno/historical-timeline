import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { getAnimationTiming } from "./math";

type UseTimelineNavigationParams = {
	isLoading: boolean;
	activeIndex: number;
	total: number;
};

const formatPaginationLabel = (value: number) => String(value).padStart(2, "0");

export function useTimelineNavigation({
	isLoading,
	activeIndex,
	total,
}: UseTimelineNavigationParams) {
	const [paginationCurrentLabel, setPaginationCurrentLabel] = useState("00");
	const leftRef = useRef<HTMLElement | null>(null);
	const rightRef = useRef<HTMLElement | null>(null);
	const queueRef = useRef<number[]>([]);
	const isAnimatingRef = useRef(false);

	const paginationLabelAll = formatPaginationLabel(total);

	useEffect(() => {
		if (total > 0) {
			return;
		}

		queueRef.current = [];
		isAnimatingRef.current = false;
		setPaginationCurrentLabel("00");
	}, [total]);

	useGSAP(
		() => {
			if (isLoading || total === 0) {
				return;
			}

			const node = leftRef.current;
			if (!node) {
				return;
			}

			const playAnimation = (nextIndex: number) => {
				isAnimatingRef.current = true;
				const timing = getAnimationTiming(queueRef.current.length);

				const timeline = gsap.timeline({
					onComplete: () => {
						const nextQueuedIndex = queueRef.current.shift();
						if (nextQueuedIndex !== undefined) {
							playAnimation(nextQueuedIndex);
							return;
						}

						isAnimatingRef.current = false;
					},
				});

				timeline
					.to(node, {
						y: -timing.offsetY,
						opacity: 0,
						duration: timing.out,
						ease: "power3.in",
						onComplete: () => {
							setPaginationCurrentLabel(formatPaginationLabel(nextIndex + 1));
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
			};

			const nextLabel = formatPaginationLabel(activeIndex + 1);
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

			if (!leftNode || !rightNode || isLoading || total === 0) {
				return;
			}

			gsap.killTweensOf([leftNode, rightNode]);

			const timeline = gsap.timeline();
			timeline
				.to([leftNode, rightNode], {
					y: -8,
					opacity: 0,
					duration: 0.18,
					ease: "power3.in",
					onComplete: () => {
						setPaginationCurrentLabel(formatPaginationLabel(activeIndex + 1));
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
			dependencies: [isLoading, total],
			revertOnUpdate: false,
		},
	);

	return { leftRef, rightRef, paginationCurrentLabel, paginationLabelAll };
}
