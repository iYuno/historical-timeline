import { ZIndexKind } from "@shared/lib";
import styled, { css } from "styled-components";
import type { LineAttach, LineDirection } from "./line.types";

const directionStyles = {
	vertical: css`
		width: 1px;
		height: 100%;
	`,

	horizontal: css`
		height: 1px;
		width: 100%;
	`,
} satisfies Record<LineDirection, ReturnType<typeof css>>;

const attachStyles = {
	top: css`
		top: 0;
		left: 0;
	`,

	bottom: css`
		bottom: 0;
		left: 0;
	`,

	left: css`
		left: 0;
		top: 0;
	`,

	right: css`
		right: 0;
		top: 0;
	`,

	center: css`
		top: 50%;
		left: 50%;
	`,
} satisfies Record<LineAttach, ReturnType<typeof css>>;

export const StyledLine = styled.span<{
	$direction: LineDirection;
	$attach: LineAttach;
}>`
	position: absolute;
	z-index: ${ZIndexKind.header};
	background-color: ${({ theme }) => theme.colors.line};

	${({ $direction }) => directionStyles[$direction]}
	${({ $attach }) => attachStyles[$attach]}
	transform: ${({ $direction, $attach }) =>
		$attach === "center"
			? $direction === "vertical"
				? "translateY(-50%)"
				: "translateX(-50%)"
			: "translate(0, 0)"};
`;
