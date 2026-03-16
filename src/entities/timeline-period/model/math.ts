export const getPointPositionPercent = (index: number, count: number, radiusPercent: number) => {
	const startAngle = -60;
	const step = 360 / count;
	const angle = startAngle + index * step;
	const radian = (angle * Math.PI) / 180;

	return {
		x: radiusPercent * Math.cos(radian),
		y: radiusPercent * Math.sin(radian),
	};
};

export const getShortestStepDelta = (from: number, to: number, count: number) => {
	let delta = to - from;
	const half = count / 2;

	if (delta > half) {
		delta -= count;
	}

	if (delta < -half) {
		delta += count;
	}

	return delta;
};
