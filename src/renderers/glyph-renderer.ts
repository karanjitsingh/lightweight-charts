import { GlyphStyle } from '../model/glyph';

export interface GlyphDimensions { posX: number; posY: number; width: number; height: number; }

export namespace GlyphRenderer {
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
		ctx.moveTo(posX, posY);
		ctx.lineTo(posX + width / 2, posY + height);
		ctx.lineTo(posX + width, posY);
		ctx.closePath();
		ctx.stroke();
	}

	function renderDownArrow(ctx: CanvasRenderingContext2D, dims: GlyphDimensions): void {
		const { posX, posY, width, height } = dims;
		ctx.beginPath();
		ctx.moveTo(posX, posY + height);
		ctx.lineTo(posX + width / 2, posY);
		ctx.lineTo(posX + width, posY + height);
		ctx.closePath();
		ctx.stroke();
	}

	function renderUpDoubleArrow(ctx: CanvasRenderingContext2D, dims: GlyphDimensions): void {
		const { posX, posY, width, height } = dims;
		ctx.beginPath();
		ctx.moveTo(posX, posY + height * 0.1);
		ctx.lineTo(posX + width / 2, posY + height);
		ctx.lineTo(posX + width, posY + height * 0.1);
		ctx.stroke();
		ctx.beginPath();
		ctx.moveTo(posX, posY);
		ctx.lineTo(posX + width / 2, posY + height * 0.9);
		ctx.lineTo(posX + width, posY);
		ctx.stroke();
	}

	function renderDownDoubleArrow(ctx: CanvasRenderingContext2D, dims: GlyphDimensions): void {
		const { posX, posY, width, height } = dims;
		ctx.beginPath();
		ctx.moveTo(posX, posY + height * 0.9);
		ctx.lineTo(posX + width / 2, posY);
		ctx.lineTo(posX + width, posY + height * 0.9);
		ctx.stroke();
		ctx.beginPath();
		ctx.moveTo(posX, posY + height);
		ctx.lineTo(posX + width / 2, posY + height * 0.1);
		ctx.lineTo(posX + width, posY + height);
		ctx.stroke();
	}

	function renderText(ctx: CanvasRenderingContext2D, dims: GlyphDimensions, text: string): void {
		const { posX, posY, width, height } = dims;
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';
		ctx.font = '12px Arial';
		ctx.fillText(text, posX + width / 2, posY + height / 2);
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

	export function renderGlyph(ctx: CanvasRenderingContext2D, glyphStyle: GlyphStyle, dims: GlyphDimensions, text?: string): void {
		switch (glyphStyle) {
			case GlyphStyle.Circle:
				renderCircle(ctx, dims);
				break;
			case GlyphStyle.UpTriangle:
				renderUpTriangle(ctx, dims);
				break;
			case GlyphStyle.DownTriangle:
				renderDownTriangle(ctx, dims);
				break;
			case GlyphStyle.Square:
				renderSquare(ctx, dims);
				break;
			case GlyphStyle.Cross:
				renderCross(ctx, dims);
				break;
			case GlyphStyle.UpArrow:
				renderUpArrow(ctx, dims);
				break;
			case GlyphStyle.DownArrow:
				renderDownArrow(ctx, dims);
				break;
			case GlyphStyle.UpDoubleArrow:
				renderUpDoubleArrow(ctx, dims);
				break;
			case GlyphStyle.DownDoubleArrow:
				renderDownDoubleArrow(ctx, dims);
				break;
			case GlyphStyle.Text:
				if (text) {
					renderText(ctx, dims, text);
				}
				break;
			case GlyphStyle.BangBang:
				renderBangBang(ctx, dims);
				break;
			case GlyphStyle.Bang:
				renderBang(ctx, dims);
				break;
			case GlyphStyle.Checkmark:
				renderCheckmark(ctx, dims);
				break;
			default:
				throw new Error('Unsupported glyph style');
		}
	}
}
