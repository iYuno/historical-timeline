import { Flex } from "@shared/ui/flex";
import styled from "styled-components";

export const StyledFlexContainer = styled(Flex)`

	@media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		gap: .5rem;
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		gap: 1.25rem;
	}
`;
