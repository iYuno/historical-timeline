export type LineDirection = "horizontal" | "vertical";

export type LineAttach = "top" | "bottom" | "left" | "right" | "center";

export type LineProps = {
	direction?: LineDirection;
	attach?: LineAttach;
};
