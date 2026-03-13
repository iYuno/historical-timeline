import { StyledLine } from "./line.styles";
import type { LineProps } from "./line.types";

export const Line = ({ direction = "vertical", attach = "left" }: LineProps) => {
	return <StyledLine $direction={direction} $attach={attach} className="line" />;
};
