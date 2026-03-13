import type { AppTheme } from "@shared/config/@x/styled";
import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme extends AppTheme {}
}
