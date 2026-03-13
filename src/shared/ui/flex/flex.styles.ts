import styled from "styled-components";

import type { FlexProps } from "./flex.types";

type StyledFlexProps = {
	$direction: NonNullable<FlexProps["direction"]>;
	$gap: FlexProps["gap"];
	$align: FlexProps["align"];
	$justify: FlexProps["justify"];
	$wrap: FlexProps["wrap"];
	$position: FlexProps["position"];
	$marginTop: FlexProps["marginTop"];
	$marginBottom: FlexProps["marginBottom"];
};

export const FlexRoot = styled.div<StyledFlexProps>`
	display: flex;
	flex-direction: ${({ $direction }) => $direction};
	gap: ${({ $gap }) => $gap};
	align-items: ${({ $align }) => $align};
	justify-content: ${({ $justify }) => $justify};
	flex-wrap: ${({ $wrap }) => $wrap};
	margin-top: ${({ $marginTop }) => $marginTop};
	margin-bottom: ${({ $marginBottom }) => $marginBottom};
	position: ${({ $position }) => $position};
`;
