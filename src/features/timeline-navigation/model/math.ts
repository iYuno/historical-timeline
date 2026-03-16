export const getAnimationTiming = (queueLength: number) => {
	const NORMAL_TOTAL = 0.5;

	const steps = queueLength + 1;
	const duration = Math.min(0.3, NORMAL_TOTAL / steps);

	return {
		out: duration * 0.45,
		in: duration * 0.55,
		offsetY: queueLength > 3 ? 6 : 8,
	};
};
