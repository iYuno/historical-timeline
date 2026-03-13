import { ZIndexKind } from "@shared/lib";
import { Button } from "@shared/ui/button";
import { T } from "@shared/ui/typography";
import { styled } from "styled-components";

export const StyledCircle = styled.div<{ $rotation: number }>`
	width: 530px;
	height: 530px;
	position: absolute;
	@media (min-width: ${({ theme }) => theme.breakpoints["2xl"]}) {
		top: calc(-530px / 2 + 160px / 2);
	}
	top: calc(-530px / 2 + 128px / 2);
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
	display: flex;
	justify-content: center;
	align-items: center;
	left: ${({ $xOffset }) => `calc(50% + ${$xOffset}%)`};
	top: ${({ $yOffset }) => `calc(50% + ${$yOffset}%)`};
	transform: translate(-50%, -50%)
		rotate(${({ $rotationCompensation }) => $rotationCompensation}deg);
	transition: transform 1000ms ease, opacity 160ms ease;
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
