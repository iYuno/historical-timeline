import type { ButtonHTMLAttributes, ReactNode } from "react";

import { ButtonRoot } from "./button.styles";
import type { ButtonSize, ButtonVariant } from "./button.types";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: ButtonVariant;
	size?: ButtonSize;
	children?: ReactNode;
};

export const Button = ({ variant = "outline", size, children, ...props }: ButtonProps) => {
	const shouldWrap =
		variant === "dot" && (typeof children === "string" || typeof children === "number");

	return (
		<ButtonRoot $variant={variant} $size={size} {...props}>
			{shouldWrap ? <span>{children}</span> : children}
		</ButtonRoot>
	);
};
