// biome-ignore-all lint/style/useLiteralEnumMembers: enum values are derived from shared layering helpers.
const BASE_INDEX = 100;

function getZIndex(level: number) {
	return BASE_INDEX - (9 - level);
}

export enum ZIndexKind {
	notification = getZIndex(9),
	tooltip = getZIndex(8),
	hint = getZIndex(8),
	dropdown = getZIndex(6),
	confirmation = getZIndex(6),
	modal = getZIndex(5),
	drawer = getZIndex(4),
	backdrop = getZIndex(2),
	header = getZIndex(1),

	/** для позиционирования в рамках родительского блока */
	relative = 1,
	/** для позиционирования над всем контентом. для исключительных случаев */
	absolute = getZIndex(10),
}
