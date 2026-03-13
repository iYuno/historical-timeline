import type { CSSProperties, ReactNode } from "react";

export type FlexDirection = "row" | "column";

export type FlexAlign = CSSProperties["alignItems"];
export type FlexJustify = CSSProperties["justifyContent"];
export type FlexWrap = CSSProperties["flexWrap"];
export type FlexGap = CSSProperties["gap"];
export type MarginTop = CSSProperties["marginTop"];
export type MarginBttom = CSSProperties["marginBottom"];
export type Position = CSSProperties["position"];

export type FlexProps = {
	children: ReactNode;
	className?: string;
	direction?: FlexDirection;
	gap?: FlexGap;
	align?: FlexAlign;
	justify?: FlexJustify;
	wrap?: FlexWrap;
	position?: Position;
	marginTop?: MarginTop;
	marginBottom?: MarginBttom;
};
