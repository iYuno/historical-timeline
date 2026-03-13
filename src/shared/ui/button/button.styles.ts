import styled, { css } from "styled-components";

import type { ButtonSize, ButtonVariant } from "./button.types";

const sizeStyles = {
	"icon-sm": css`
		width: 40px;
		height: 40px;
		border-radius: 50%;
		padding: 7px 9px;
	`,
	"icon-md": css`
		@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
			width: 25px;
			height: 25px;
			border-radius: 50%;
			padding: 2px 3px;

			svg {
				width: 12px;
				height: 12px;
			}
		}

		@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
			width: 50px;
			height: 50px;
			border-radius: 50%;
		}
	`,
	"icon-lg": css`
		width: 56px;
		height: 56px;
		border-radius: 50%;
	`,
	"number-lg": css`
		width: 56px;
		height: 56px;
		border-radius: 50%;
	`,
} satisfies Record<ButtonSize, ReturnType<typeof css>>;

const variantStyles = {
	outline: css`
		border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
		background: transparent;
		color: ${({ theme }) => theme.colors.textPrimary};

		&:disabled {
			opacity: .5;
			cursor: default;
		}

		&:not(:disabled):hover {
			background: ${({ theme }) => theme.colors.backgroundSecondary};
		}
	`,

	ghost: css`
		border: none;
		background: ${({ theme }) => theme.colors.backgroundSecondary};
		color: ${({ theme }) => theme.colors.textPrimary};
		transition: opacity 200ms;

		&:disabled {
			opacity: 0;
			cursor: default;
		}

		&:not(:disabled):hover {
		}
		
		box-shadow: ${({ theme }) => theme.shadow.soft};
	`,

	dot: css`
		&::before {
			content: "";
			position: absolute;
			width: 28px;
		}

		width: 56px;
		height: 56px;

		border-radius: 50%;
		border: 1px solid ${({ theme }) => theme.colors.borderPrimary};

		background: ${({ theme }) => theme.colors.primary};

		transform: scale(0.1071);

		transition:
			transform 300ms ease,
			background 300ms ease,
			border-color 300ms ease;

		span {
			opacity: 0;
			visibility: hidden;
			transition: opacity 160ms ease;
		}

		&:hover,
		&.active {
			transform: scale(1);

			background: ${({ theme }) => theme.colors.background};
			border-color: ${({ theme }) => theme.colors.borderSecondary};

			span {
				opacity: 1;
				visibility: visible;
			}
		}
	`,
} satisfies Record<ButtonVariant, ReturnType<typeof css>>;

export const ButtonRoot = styled.button<{
	$variant: ButtonVariant;
	$size?: ButtonSize;
}>`
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;

	border-radius: 6px;
	padding: 8px 12px;

	font: inherit;

	${({ $variant }) => variantStyles[$variant]}

	${({ $size }) => $size && sizeStyles[$size]}
`;
