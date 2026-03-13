import { ZIndexKind } from "@shared/lib";
import { Flex } from "@shared/ui/flex";
import styled from "styled-components";
import { SwiperSlide } from "swiper/react";

export const StyledFlexContainer = styled(Flex)`
	@media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
		.swiper-prev, .swiper-next {
			display: none;
		}
	}
`;

export const StyledFlexNavigation = styled(Flex)`
	left: calc(20 / 1920 * 100vw);
	top: calc(50% - 20px);
	right: calc(40 / 1920 * 100vw);

	display: flex;
	justify-content: space-between;
`;

export const SwiperAnimatedContainer = styled.div`
	position: relative;
	opacity: 1;

	@media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
		.swiper {
			.swiper-prev, .swiper-next {
				display: none;
			}
		}
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		.swiper {
			width: 300px;
			margin: 0;
		}	
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		.swiper {
			width: calc(${({ theme }) => theme.breakpoints.md} - 80px);
			margin: 0;
		}
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		.swiper {
			width: calc(1440 / 1920 * 100vw);;
			margin: 0;
		}
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
		.swiper {
			width: calc(1200 / 1920 * 100vw);
			margin: 0;
		}
	}
`;

export const TimeineSwiperPagination = styled.div`
	z-index: ${ZIndexKind.header};
	display: flex;
	justify-content: center;
	position: absolute;

	@media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		.swiper-pagination-bullet {
			width: 6px;
			height: 6px;
		}
		&&& {
			bottom: calc(0px + 1.25rem - 3px + 12.5px);
		}
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		.swiper-pagination-bullet {
			width: 8px;
			height: 8px;
		}
		&&& {
			bottom: calc(0px + 1.25rem - 4px + 25px);
		}
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		.swiper-pagination-bullet {
			width: 10px;
			height: 10px;
		}
		&&& {
			bottom: calc(0px + 1.25rem - 5px + 25px);
		}
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
		display: none;
	}

	.swiper-pagination-bullet {
		background: ${({ theme }) => theme.colors.primary};
		opacity: 0.4;
		transition: opacity 0.2s ease;
	}

	.swiper-pagination-bullet-active {
		opacity: 1;
	}
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
	opacity: 1;
	transition: opacity 400ms ease;

	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		&.swiper-slide-next {
			opacity: 0.4;
		}
	}
`;
