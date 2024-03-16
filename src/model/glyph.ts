export interface Glyph {
	color: string;
	style: GlyphStyle;
	position: GlyphPosition;
	text?: string;
}

export const enum GlyphPosition {
	Above,
	Below,
}

export const enum GlyphStyle {
	UpTriangle,
	DownTriangle,
	Circle,
	Square,
	Cross,
	UpArrow,
	DownArrow,
	UpDoubleArrow,
	DownDoubleArrow,
	Text,
	BangBang,
	Bang,
	Checkmark,
}
