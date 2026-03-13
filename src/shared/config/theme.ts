export const palette = {
	fuchsia: {
		600: "oklch(0.6875 0.1943 351.54)",
	},
	iris: {
		600: "oklch(0.5679 0.2113 276.71)",
	},
	blue: {
		600: "oklch(0.5939 0.1912 261.6)",
		"600/10": "oklch(0.5939 0.1912 261.6 / 0.1)",
	},
	slate: {
		300: "oklch(0.9705 0.0054 274.97)",
		600: "oklch(0.4525 0.0643 261.77)",
		700: "oklch(0.3635 0.0489 262.38)",
		"700/10": "oklch(0.3635 0.0489 262.38 / 0.1)",
		"700/50": "oklch(0.3635 0.0489 262.38 / 0.5)",
	},
} as const;

export const theme = {
	colors: {
		background: palette.slate[300],
		backgroundSecondary: "oklch(1 0 0)",

		textPrimary: palette.slate[600],
		textSecondary: palette.blue[600],

		primary: palette.slate[600],
		secondary: palette.fuchsia[600],
		accent: palette.iris[600],

		borderPrimary: palette.slate[600],
		borderSecondary: palette.slate["700/50"],

		line: palette.slate["700/10"],
	},

	gradient: {
		primary: `linear-gradient(${palette.iris[600]}, ${palette.fuchsia[600]})`,
	},

	shadow: {
		soft: `0 0 15px 0 ${palette.blue["600/10"]}`,
	},

	layout: {
		contentWidth: "1440px",
	},

	breakpoints: {
		sm: "320px",
		md: "768px",
		lg: "1024px",
		xl: "1200px",
		"2xl": "1440px",
	},

	typography: {
		fontFamily: {
			heading: '"Bebas Neue", sans-serif',
			body: '"PT Sans", sans-serif',
		},

		fontSize: {
			sm: {
				mobile: "0.875rem",
				tablet: "0.875rem",
				laptop: "1rem",
				desktop: "1rem",
			},
			md: {
				mobile: "0.875rem",
				tablet: "1rem",
				laptop: "1rem",
				desktop: "1rem",
			},
			xl: {
				mobile: "1rem",
				tablet: "1.25rem",
				laptop: "1.5625rem",
				desktop: "1.5625rem",
			},
			"2xl": {
				mobile: "1.25rem",
				tablet: "2rem",
				laptop: "2.75rem",
				desktop: "3.5rem",
			},
			"3xl": {
				mobile: "3.5rem",
				tablet: "8rem",
				laptop: "10rem",
				desktop: "12.5rem",
			},
		},

		fontWeight: {
			regular: 400,
			medium: 500,
			semibold: 600,
			bold: 700,
		},

		lineHeight: {
			tight: 0.8,
			heading: 1.2,
			body: 1.5,
			caption: 1.35,
		},

		variants: {
			h1: {
				fontFamily: "body",
				fontSize: "3xl",
				fontWeight: "bold",
				lineHeight: "tight",
			},
			h2: {
				fontFamily: "body",
				fontSize: "2xl",
				fontWeight: "bold",
				lineHeight: "heading",
			},
			h3: {
				fontFamily: "heading",
				fontSize: "xl",
				fontWeight: "regular",
				lineHeight: "heading",
			},
			body: {
				fontFamily: "body",
				fontSize: "md",
				fontWeight: "regular",
				lineHeight: "body",
			},
			label: {
				fontFamily: "body",
				fontSize: "md",
				fontWeight: "bold",
				lineHeight: "body",
			},
			caption: {
				fontFamily: "body",
				fontSize: "sm",
				fontWeight: "regular",
				lineHeight: "caption",
			},
		},
	},
} as const;

export type Palette = typeof palette;
export type AppTheme = typeof theme;

export type TypographyConfig = AppTheme["typography"];
export type TypographyVariants = TypographyConfig["variants"];

export type TypographyVariant = keyof TypographyVariants;

export type TypographyFontColorToken = keyof Pick<
	AppTheme["colors"],
	"textPrimary" | "textSecondary" | "primary" | "secondary" | "accent"
>;
