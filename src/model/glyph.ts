export interface Glyph {
	color: string;
	style: GlyphStyle;
	position: GlyphPosition;
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
}
