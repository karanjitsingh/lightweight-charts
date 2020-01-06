import { BarPrice } from './bar';
import { Glyph } from './glyph';
import { PlotRow, PlotValue } from './plot-data';
import { EnumeratingFunction, PlotFunctionMap, PlotList, PlotRowSearchMode } from './plot-list';
import { TimePoint, TimePointIndex } from './time-data';

export interface Bar {
	time: TimePoint;
	plot: {
		value: [PlotValue, PlotValue, PlotValue, PlotValue, PlotValue];
		glyphs: Glyph[];
	};
}

/**
 * Plot's index in plot list tuple for series (or overlay study)
 * @see {Bar}
 */
export const enum SeriesPlotIndex {
	Open = 0,
	High = 1,
	Low = 2,
	Close = 3,
	Color = 4,
}

const barFunctions = {
	open: (bar: Bar['plot']) => bar.value[SeriesPlotIndex.Open] as BarPrice,

	high: (bar: Bar['plot']) => bar.value[SeriesPlotIndex.High] as BarPrice,

	low: (bar: Bar['plot']) => bar.value[SeriesPlotIndex.Low] as BarPrice,

	close: (bar: Bar['plot']) => bar.value[SeriesPlotIndex.Close] as BarPrice,

	hl2: (bar: Bar['plot']) =>
		(
			(bar.value[SeriesPlotIndex.High] as number) +
			(bar.value[SeriesPlotIndex.Low] as number)
		) / 2 as BarPrice,

	hlc3: (bar: Bar['plot']) =>
		(
			(bar.value[SeriesPlotIndex.High] as number) +
			(bar.value[SeriesPlotIndex.Low] as number) +
			(bar.value[SeriesPlotIndex.Close] as number)
		) / 3 as BarPrice,

	ohlc4: (bar: Bar['plot']) =>
		(
			(bar.value[SeriesPlotIndex.Open] as number) +
			(bar.value[SeriesPlotIndex.High] as number) +
			(bar.value[SeriesPlotIndex.Low] as number) +
			(bar.value[SeriesPlotIndex.Close] as number)
		) / 4 as BarPrice,
};

type SeriesPriceSource = keyof typeof barFunctions;

const seriesSource: SeriesPriceSource[] = ['open', 'high', 'low', 'close', 'hl2', 'hlc3', 'ohlc4'];

function seriesPlotFunctionMap(): PlotFunctionMap<Bar['plot']> {
	const result: PlotFunctionMap<Bar['plot']> = new Map();

	seriesSource.forEach((plot: keyof typeof barFunctions, index: number) => {
		result.set(plot, barFunction(plot));
	});

	return result;
}

export type BarFunction = (bar: Bar['plot']) => BarPrice;

export function barFunction(priceSource: SeriesPriceSource): BarFunction {
	return barFunctions[priceSource];
}

export class SeriesData {
	private _bars: PlotList<TimePoint, Bar['plot']>;

	public constructor() {
		this._bars = new PlotList<TimePoint, Bar['plot']>(seriesPlotFunctionMap());
	}

	public bars(): PlotList<TimePoint, Bar['plot']> {
		return this._bars;
	}

	public size(): number {
		return this._bars.size();
	}

	public each(fun: EnumeratingFunction<TimePoint, Bar['plot']>): void {
		this._bars.each(fun);
	}

	public clear(): void {
		this._bars.clear();
	}

	public isEmpty(): boolean {
		return this._bars.isEmpty();
	}

	public first(): PlotRow<TimePoint, Bar['plot']> | null {
		return this._bars.first();
	}

	public last(): PlotRow<TimePoint, Bar['plot']> | null {
		return this._bars.last();
	}

	public search(index: TimePointIndex, options?: PlotRowSearchMode): PlotRow<TimePoint, Bar['plot']> | null {
		return this.bars().search(index, options);
	}

	public valueAt(index: TimePointIndex): Bar | null {
		return this.search(index);
	}
}
