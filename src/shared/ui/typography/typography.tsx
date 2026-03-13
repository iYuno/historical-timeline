import type { TypographyFontColorToken, TypographyVariant } from "@shared/config/@x/typography";
import { ZIndexKind } from "@shared/lib";
import styled, { css } from "styled-components";
import type { TypographyProps } from "./typography.types";

const Root = styled.p<{ $variant: TypographyVariant; $color: TypographyFontColorToken }>`
	z-index: ${ZIndexKind.backdrop};
	margin: 0;
	${({ theme, $variant = "body", $color }) => {
		const variant = theme.typography.variants[$variant];
		const fontSizeToken = theme.typography.fontSize[variant.fontSize];
		const fontColorToken = $color ? theme.colors[$color] : "inherit";
		const fontFamily = theme.typography.fontFamily[variant.fontFamily];
		const fontWeight = theme.typography.fontWeight[variant.fontWeight];
		const lineHeight = theme.typography.lineHeight[variant.lineHeight];

		return css`
			color: ${fontColorToken};
			font-family: ${fontFamily};
			font-weight: ${fontWeight};
			line-height: ${lineHeight};
			font-size: ${fontSizeToken.mobile};

			@media (min-width: ${theme.breakpoints.sm}) {
				font-size: ${fontSizeToken.mobile};
			}

			@media (min-width: ${theme.breakpoints.md}) {
				font-size: ${fontSizeToken.tablet};
			}

			@media (min-width: ${theme.breakpoints.xl}) {
				font-size: ${fontSizeToken.laptop};
			}

			@media (min-width: ${theme.breakpoints["2xl"]}) {
				font-size: ${fontSizeToken.desktop};
			}
		`;
	}}
`;

export const T = ({
	as = "p",
	variant = "body",
	color,
	children,
	className,
	ref,
}: TypographyProps) => {
	return (
		<Root as={as} $variant={variant} className={className} $color={color} ref={ref}>
			{children}
		</Root>
	);
};
