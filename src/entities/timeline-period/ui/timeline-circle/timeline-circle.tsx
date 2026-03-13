import { T } from "@shared/ui/typography";
import { type FC, useEffect, useRef, useState } from "react";
import { getPointPositionPercent, getShortestStepDelta } from "../../model/math";
import type { CircleProps } from "../../model/types";
import { PointLabel, PointSlot, StyledCircle, StyledPoint } from "./timeline-circle.styles";

const TARGET_ANGLE = 0;

export const TimelineCircle: FC<CircleProps> = ({ points, activeIndex, onChange }) => {
	const [rotation, setRotation] = useState(TARGET_ANGLE);
	const prevIndexRef = useRef(activeIndex);

	useEffect(() => {
		if (activeIndex === prevIndexRef.current) return;

		const step = 360 / points.length;
		const shortestDelta = getShortestStepDelta(prevIndexRef.current, activeIndex, points.length);

		setRotation((prev) => prev - shortestDelta * step);
		prevIndexRef.current = activeIndex;
	}, [activeIndex, points.length]);

	return (
		<StyledCircle $rotation={rotation} className="timeline-circle">
			{points.map((point, index) => {
				const { x, y } = getPointPositionPercent(index, points.length, 50);
				const isActive = index === activeIndex;

				return (
					<PointSlot $rotationCompensation={-rotation} key={point.id} $xOffset={x} $yOffset={y}>
						<StyledPoint
							variant="dot"
							className={isActive ? "active" : undefined}
							onClick={() => onChange(index)}
						>
							<T as="p" variant="body">
								{index + 1}
							</T>
						</StyledPoint>

						<PointLabel as="h3" $isActive={isActive}>
							{point.label}
						</PointLabel>
					</PointSlot>
				);
			})}
		</StyledCircle>
	);
};
