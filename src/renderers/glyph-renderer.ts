import { GlyphStyle } from '../model/glyph';

export interface GlyphDimensions { posX: number; posY: number; width: number; height: number; }

function renderCircle(ctx: CanvasRenderingContext2D, dims: GlyphDimensions): void {
	const { posX, posY, width } = dims;
	ctx.beginPath();
	ctx.arc(posX + width / 2, posY + width / 2, width / 2, 0, 2 * Math.PI);
	ctx.fill();
}

function renderUpTriangle(ctx: CanvasRenderingContext2D, dims: GlyphDimensions): void {
	const { posX, posY, width, height } = dims;
	ctx.beginPath();
	ctx.moveTo(posX + width / 2, posY);
	ctx.lineTo(posX, posY + height);
	ctx.lineTo(posX + width, posY + height);
	ctx.closePath();
	ctx.fill();
}

function renderDownTriangle(ctx: CanvasRenderingContext2D, dims: GlyphDimensions): void {
	const { posX, posY, width, height } = dims;
	ctx.beginPath();
	ctx.moveTo(posX + width / 2, posY + height);
	ctx.lineTo(posX, posY);
	ctx.lineTo(posX + width, posY);
	ctx.closePath();
	ctx.fill();
}

function renderSquare(ctx: CanvasRenderingContext2D, dims: GlyphDimensions): void {
	const { posX, posY, width, height } = dims;
	ctx.fillRect(posX, posY, width, height);
}

function renderCross(ctx: CanvasRenderingContext2D, dims: GlyphDimensions): void {
	const { posX, posY, width, height } = dims;
	ctx.beginPath();
	ctx.moveTo(posX, posY);
	ctx.lineTo(posX + width, posY + height);
	ctx.moveTo(posX + width, posY);
	ctx.lineTo(posX, posY + height);
	ctx.stroke();
}

function renderUpArrow(ctx: CanvasRenderingContext2D, dims: GlyphDimensions): void {
	const { posX, posY, width, height } = dims;
	ctx.beginPath();
	ctx.moveTo(posX, posY + height * 0.9);
	ctx.lineTo(posX + width / 2, posY + height * 0.1);
	ctx.lineTo(posX + width, posY + height * 0.9);
	ctx.stroke();
}

function renderDownArrow(ctx: CanvasRenderingContext2D, dims: GlyphDimensions): void {
	const { posX, posY, width, height } = dims;
	ctx.beginPath();
	ctx.moveTo(posX, posY + height * 0.1);
	ctx.lineTo(posX + width / 2, posY + height * 0.9);
	ctx.lineTo(posX + width, posY + height * 0.1);
	ctx.stroke();
}

function renderUpDoubleArrow(ctx: CanvasRenderingContext2D, dims: GlyphDimensions): void {
	const { posX, posY, width, height } = dims;
	ctx.beginPath();
	ctx.moveTo(posX, posY + height * 0.6);
	ctx.lineTo(posX + width / 2, posY);
	ctx.lineTo(posX + width, posY + height * 0.6);
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(posX, posY + height);
	ctx.lineTo(posX + width / 2, posY + height * 0.4);
	ctx.lineTo(posX + width, posY + height);
	ctx.stroke();
}

function renderDownDoubleArrow(ctx: CanvasRenderingContext2D, dims: GlyphDimensions): void {
	const { posX, posY, width, height } = dims;
	ctx.beginPath();
	ctx.moveTo(posX, posY + height * 0.4);
	ctx.lineTo(posX + width / 2, posY + height);
	ctx.lineTo(posX + width, posY + height * 0.4);
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(posX, posY);
	ctx.lineTo(posX + width / 2, posY + height * 0.6);
	ctx.lineTo(posX + width, posY);
	ctx.stroke();
}

function renderText(ctx: CanvasRenderingContext2D, dims: GlyphDimensions, text?: string): void {
	const { posX, posY, width, height } = dims;
	ctx.textAlign = 'center';
	ctx.textBaseline = 'middle';
	ctx.font = '12px Arial';
	ctx.fillText(text || '', posX + width / 2, posY + height / 2);
}

function renderBangBang(ctx: CanvasRenderingContext2D, dims: GlyphDimensions): void {
	renderText(ctx, dims, '!!');
}

function renderBang(ctx: CanvasRenderingContext2D, dims: GlyphDimensions): void {
	renderText(ctx, dims, '!');
}

function renderCheckmark(ctx: CanvasRenderingContext2D, dims: GlyphDimensions): void {
	const { posX, posY, width, height } = dims;
	ctx.beginPath();
	ctx.moveTo(posX, posY + 2 * height / 3);
	ctx.lineTo(posX + width / 3, posY + height);
	ctx.lineTo(posX + width, posY);
	ctx.stroke();
}

function renderLeftSemiCircle(ctx: CanvasRenderingContext2D, dims: GlyphDimensions): void {
	const { posX, posY, width, height } = dims;
	ctx.beginPath();
	ctx.arc(posX + width / 2, posY + height / 2, width / 2, Math.PI / 2, 3 * Math.PI / 2);
	ctx.stroke();
	ctx.fill();
}

function renderRightSemiCircle(ctx: CanvasRenderingContext2D, dims: GlyphDimensions): void {
	const { posX, posY, width, height } = dims;
	ctx.beginPath();
	ctx.arc(posX + width / 2, posY + height / 2, width / 2, -Math.PI / 2, Math.PI / 2);
	ctx.stroke();
	ctx.fill();
}

const GlyphRendererMap: { [key in GlyphStyle]: (ctx: CanvasRenderingContext2D, dims: GlyphDimensions, text?: string) => void } = {
	[GlyphStyle.Circle]: renderCircle,
	[GlyphStyle.UpTriangle]: renderUpTriangle,
	[GlyphStyle.DownTriangle]: renderDownTriangle,
	[GlyphStyle.Square]: renderSquare,
	[GlyphStyle.Cross]: renderCross,
	[GlyphStyle.UpArrow]: renderUpArrow,
	[GlyphStyle.DownArrow]: renderDownArrow,
	[GlyphStyle.UpDoubleArrow]: renderUpDoubleArrow,
	[GlyphStyle.DownDoubleArrow]: renderDownDoubleArrow,
	[GlyphStyle.Text]: renderText,
	[GlyphStyle.BangBang]: renderBangBang,
	[GlyphStyle.Bang]: renderBang,
	[GlyphStyle.Checkmark]: renderCheckmark,
	[GlyphStyle.LeftSemiCircle]: renderLeftSemiCircle,
	[GlyphStyle.RightSemiCircle]: renderRightSemiCircle,
};

export namespace GlyphRenderer {
	export function renderGlyph(ctx: CanvasRenderingContext2D, glyphStyle: GlyphStyle, dims: GlyphDimensions, text?: string): void {
		if (glyphStyle in GlyphRendererMap) {
			GlyphRendererMap[glyphStyle](ctx, dims, text);
			return;
		} else {
			throw new Error('Unsupported glyph style');
		}
	}
}
