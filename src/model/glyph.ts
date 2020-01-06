export interface Glyph {
	color: string;
	style: GlyphStyle;
	position: GlyphPosition;
}

export enum GlyphPosition {
	Above,
	Below,
}

export enum GlyphStyle {
	UpTriangle,
	DownTriangle,
	Circle,
	Square,
}
