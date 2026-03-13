import type { TypographyFontColorToken, TypographyVariant } from "@shared/config/@x/typography";
import type { ElementType, ReactNode, RefObject } from "react";

export type TypographyProps = {
	as?: ElementType;
	variant?: TypographyVariant;
	color?: TypographyFontColorToken;
	children: ReactNode;
	className?: string;
	ref?: RefObject<any>;
};
