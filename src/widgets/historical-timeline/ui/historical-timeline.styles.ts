import { ZIndexKind } from "@shared/lib";
import { Flex } from "@shared/ui/flex";
import styled from "styled-components";

export const StyledMainContainer = styled(Flex)`
	height: 100vh;

	.timeline-navigation {
		z-index: ${ZIndexKind.backdrop};
	}	

	@media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
		.line, .timeline-circle, .divider {
			display: none;
		}
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		width: 280px;
		margin: auto;
		padding-top: 60px;
		padding-bottom: 1.25rem;

		.swiper {
			width: 300px;
			margin: 0;
		}	

		.years {
			margin-top: 56px;
			margin-bottom: 56px;
			gap: 1.25rem;
			justify-content: flex-start;
		}

		.timeline-navigation {
			order: 2;
			margin-top: auto;
			gap: 0.625rem;
		}

		& > div:has(.swiper) {
			order: 1
		}
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		width: calc(${({ theme }) => theme.breakpoints.md} - 80px);
		margin: auto;
		padding-top: calc(85 / 1080 * 100vh);

		.swiper {
			width: calc(${({ theme }) => theme.breakpoints.md} - 80px);
			margin: 0;
		}	

		.years {
			justify-content: center;
			gap: 2.5rem;
		}
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		width: calc(1440 / 1920 * 100vw);
		margin-left: calc(320 / 1920 * 100vw);
		padding-top: calc(170 / 1080 * 100vh);

		.swiper {
			width: calc(1440 / 1920 * 100vw);;
			margin: 0;
		}	
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
		> div:not(.years) {
			padding-left: calc(80 / 1920 * 100vw);
		}

		.years {
			margin-top: 93px;
			margin-bottom: 140px;
			gap: 5rem;
		}

		.swiper {
			width: calc(1200 / 1920 * 100vw);
			margin: 0;
		}

		.timeline-navigation {
			order: 1;
			margin-top: 0;
			margin-bottom: 3.5rem	;
			gap: 1.25em;
		}

		& > div:has(.swiper) {
			order: 2
		}
	}

	@media (min-width: ${({ theme }) => theme.breakpoints["2xl"]}) {
	}
`;

export const Divider = styled.span`
	display: block;
	background: ${({ theme }) => theme.gradient.primary};
	width: 5px;
	height: 7.5rem;
	position: absolute;
	left: 0;
`;
