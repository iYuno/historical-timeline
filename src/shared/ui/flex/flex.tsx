import { FlexRoot } from "./flex.styles";
import type { FlexProps } from "./flex.types";

export const Flex = ({
	children,
	className,
	direction = "row",
	gap = 0,
	align = "stretch",
	justify = "flex-start",
	wrap = "nowrap",
	position = "static",
	marginTop = "0",
	marginBottom = "0",
	...props
}: FlexProps) => {
	return (
		<FlexRoot
			className={className}
			$direction={direction}
			$gap={gap}
			$align={align}
			$justify={justify}
			$wrap={wrap}
			$marginTop={marginTop}
			$marginBottom={marginBottom}
			$position={position}
			{...props}
		>
			{children}
		</FlexRoot>
	);
};
