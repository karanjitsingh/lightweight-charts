import { Glyph, GlyphPosition } from '../model/glyph';
import { SeriesItemsIndexesRange } from '../model/time-data';

import { BarCandlestickItemBase } from './bars-renderer';
import { GlyphRenderer } from './glyph-renderer';
import { IPaneRenderer } from './ipane-renderer';
import { optimalBarWidth } from './optimal-bar-width';

export interface CandlestickItem extends BarCandlestickItemBase {
	color: string;
	borderColor: string;
	wickColor: string;
	glyphs: Glyph[];
}

export interface PaneRendererCandlesticksData {
	bars: ReadonlyArray<CandlestickItem>;

	wickColor: string;

	barSpacing: number;

	wickVisible: boolean;
	borderVisible: boolean;

	visibleRange: SeriesItemsIndexesRange | null;
}

const enum Constants {
	BarBorderWidth = 1,
}

export class PaneRendererCandlesticks implements IPaneRenderer {
	private _data: PaneRendererCandlesticksData | null = null;
	private _barWidth: number = 0;

	public setData(data: PaneRendererCandlesticksData): void {
		this._data = data;
		this._barWidth = optimalBarWidth(data.barSpacing);
	}

	public draw(ctx: CanvasRenderingContext2D): void {
		if (this._data === null || this._data.bars.length === 0 || this._data.visibleRange === null) {
			return;
		}
		ctx.lineCap = 'square';

		if (this._data.barSpacing < 1) {
			this._drawThinCandles(ctx);
		} else {
			const bars = this._data.bars;

			ctx.translate(-0.5, -0.5);
			ctx.lineWidth = Constants.BarBorderWidth;

			this._drawGlyphs(ctx, bars, this._data.visibleRange);

			if (this._data.wickVisible) {
				this._drawWicks(ctx, bars, this._data.visibleRange);
			}

			if (this._data.borderVisible) {
				this._drawBorder(ctx, bars, this._data.visibleRange);
			}

			this._drawCandles(ctx, bars, this._data.visibleRange);
		}
	}

	private _drawGlyphs(ctx: CanvasRenderingContext2D, bars: ReadonlyArray<CandlestickItem>, visibleRange: SeriesItemsIndexesRange): void {
		for (let i = visibleRange.from; i < visibleRange.to; i++) {
			const bar = bars[i];

			let aboveCount = 0;
			let belowCount = 0;

			if (bar.glyphs && bar.glyphs.length) {
				bar.glyphs.forEach((glyph: Glyph) => {
					ctx.fillStyle = glyph.color;
					ctx.strokeStyle = glyph.color;
					ctx.lineWidth = 2;

					const width = this._barWidth * 3;
					const height = width;

					const posX = bar.x - width / 2 + 1;
					let posY;

					// let offset = 0;

					if (glyph.position === GlyphPosition.Above) {
						aboveCount++;
						posY = bar.highY - aboveCount * height * 1.5 - height / 2;
					} else {
						belowCount++;
						posY = bar.lowY + (belowCount - 1) * height * 1.5 + height;
					}

					GlyphRenderer.renderGlyph(ctx, glyph.style, { posX, posY, width, height }, glyph.text);
				});
			}
		}
	}

	private _drawWicks(ctx: CanvasRenderingContext2D, bars: ReadonlyArray<CandlestickItem>, visibleRange: SeriesItemsIndexesRange): void {
		let prevWickColor = '';

		for (let i = visibleRange.from; i < visibleRange.to; i++) {
			const bar = bars[i];
			if (bar.wickColor !== prevWickColor) {
				ctx.fillStyle = bar.wickColor;
				prevWickColor = bar.wickColor;
			}

			ctx.fillRect(bar.x, bar.highY, 1, bar.lowY - bar.highY);
		}
	}

	private _drawBorder(ctx: CanvasRenderingContext2D, bars: ReadonlyArray<CandlestickItem>, visibleRange: SeriesItemsIndexesRange): void {
		let prevBorderColor = '';

		for (let i = visibleRange.from; i < visibleRange.to; i++) {
			const bar = bars[i];
			if (bar.borderColor !== prevBorderColor) {
				ctx.fillStyle = bar.borderColor;
				prevBorderColor = bar.borderColor;
			}

			const left = Math.round(bar.x - this._barWidth);
			const right = Math.round(bar.x + this._barWidth);

			const top = Math.min(bar.openY, bar.closeY);
			const bottom = Math.max(bar.openY, bar.closeY);

			ctx.fillRect(left, top, right - left + 1, bottom - top + 1);
		}
	}

	private _drawCandles(ctx: CanvasRenderingContext2D, bars: ReadonlyArray<CandlestickItem>, visibleRange: SeriesItemsIndexesRange): void {
		if (this._data === null) {
			return;
		}

		let prevBarColor = '';

		for (let i = visibleRange.from; i < visibleRange.to; i++) {
			const bar = bars[i];
			let top = Math.min(bar.openY, bar.closeY);
			let bottom = Math.max(bar.openY, bar.closeY);

			let left = Math.round(bar.x - this._barWidth);
			let right = Math.round(bar.x + this._barWidth);

			if (this._data.borderVisible) {
				left += 1;
				top += 1;
				right -= 1;
				bottom -= 1;
			}

			if (top > bottom) {
				continue;
			}

			if (bar.color !== prevBarColor) {
				const barColor = bar.color;
				ctx.fillStyle = barColor;
				prevBarColor = barColor;
			}

			ctx.fillRect(left, top, right - left + 1, bottom - top + 1);
		}
	}

	private _drawThinCandles(ctx: CanvasRenderingContext2D): void {
		if (this._data === null || this._data.visibleRange === null) {
			return;
		}

		ctx.lineWidth = 1;

		// draw wicks, then bodies
		if (this._data.wickVisible) {
			ctx.strokeStyle = this._data.wickColor;

			ctx.beginPath();

			for (let i = this._data.visibleRange.from; i < this._data.visibleRange.to; i++) {
				const bar = this._data.bars[i];
				ctx.moveTo(bar.x, bar.lowY);
				ctx.lineTo(bar.x, bar.highY);
			}

			ctx.stroke();
		}

		// bodies
		let prevBarColor = '';
		let needStroke = false;

		ctx.beginPath();
		for (let i = this._data.visibleRange.from; i < this._data.visibleRange.to; i++) {
			const bar = this._data.bars[i];
			if (prevBarColor !== bar.color) {
				if (needStroke) {
					ctx.stroke();
					ctx.beginPath();
					needStroke = false;
				}

				ctx.strokeStyle = bar.color;
				prevBarColor = bar.color;
			}

			ctx.moveTo(bar.x, bar.openY);
			ctx.lineTo(bar.x, bar.closeY);
			needStroke = true;
		}

		if (needStroke) {
			ctx.stroke();
		}
	}
}
