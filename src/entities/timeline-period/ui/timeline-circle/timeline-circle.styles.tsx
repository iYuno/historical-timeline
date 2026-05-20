import { ZIndexKind } from "@shared/lib";
import { Button } from "@shared/ui/button";
import { T } from "@shared/ui/typography";
import { styled } from "styled-components";

const CIRCLE_SIZE = 530;
const getCircleOffsetPx = (offsetPercent: number) => `${(CIRCLE_SIZE * offsetPercent) / 100}px`;

export const StyledCircle = styled.div<{ $rotation: number }>`
	width: ${CIRCLE_SIZE}px;
	height: ${CIRCLE_SIZE}px;
	position: absolute;
	@media (min-width: ${({ theme }) => theme.breakpoints["2xl"]}) {
		top: calc(-${CIRCLE_SIZE}px / 2 + 160px / 2);
	}
	top: calc(-${CIRCLE_SIZE}px / 2 + 128px / 2);
	border: 1px solid ${({ theme }) => theme.colors.line};
	border-radius: 50%;

	transform: rotate(${({ $rotation }) => $rotation}deg);
	transition: transform 1000ms ease;
	transform-origin: center;
	z-index: ${ZIndexKind.drawer};
`;

export const PointSlot = styled.div<{
	$xOffset: number;
	$yOffset: number;
	$rotationCompensation: number;
}>`
	position: absolute;
	inset: 0;
	width: max-content;
	height: max-content;
	margin: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	transform: translate3d(
			${({ $xOffset }) => getCircleOffsetPx($xOffset)},
			${({ $yOffset }) => getCircleOffsetPx($yOffset)},
			0
		)
		rotate(${({ $rotationCompensation }) => $rotationCompensation}deg);
	transition: transform 1000ms ease, opacity 160ms ease;
	will-change: transform;
`;

export const PointLabel = styled(T)<{ $isActive: boolean }>`
	position: absolute;
	top: 50%;
	left: calc(3.5rem + 1.25rem);
	transform: translateY(-50%);

	white-space: nowrap;
	pointer-events: none;

	opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
	visibility: ${({ $isActive }) => ($isActive ? "visible" : "hidden")};

	transition:
		transform 1000ms ease,
		opacity 200ms ease ${({ $isActive }) => ($isActive ? "1000ms" : "0ms")},
		visibility 0ms linear ${({ $isActive }) => ($isActive ? "0ms" : "200ms")};
`;

export const StyledPoint = styled(Button)``;
