import { IDestroyable } from '../helpers/idestroyable';
import { clone } from '../helpers/strict-type-checks';

import { BarPrice } from '../model/bar';
import { Coordinate } from '../model/coordinate';
import { Series } from '../model/series';
import { SeriesMarker } from '../model/series-markers';
import { SeriesOptionsMap, SeriesPartialOptionsMap, SeriesType } from '../model/series-options';
import { UTCTimestamp } from '../model/time-data';

import { BarData, DataUpdatesConsumer, HistogramData, LineData, SeriesDataItemTypeMap, Time } from './data-consumer';
import { convertTime } from './data-layer';
import { IPriceFormatter, ISeriesApi } from './iseries-api';

export class SeriesApi<TSeriesType extends SeriesType> implements ISeriesApi<TSeriesType>, IDestroyable {
	protected _series: Series<TSeriesType>;
	protected _dataUpdatesConsumer: DataUpdatesConsumer<TSeriesType>;

	public constructor(series: Series<TSeriesType>, dataUpdatesConsumer: DataUpdatesConsumer<TSeriesType>) {
		this._series = series;
		this._dataUpdatesConsumer = dataUpdatesConsumer;
	}

	public destroy(): void {
		delete this._series;
		delete this._dataUpdatesConsumer;
	}

	public priceFormatter(): IPriceFormatter {
		return this._series.formatter();
	}

	public series(): Series<TSeriesType> {
		return this._series;
	}

	public priceToCoordinate(price: BarPrice): Coordinate | null {
		const firstValue = this._series.firstValue();
		if (firstValue === null) {
			return null;
		}

		return this._series.priceScale().priceToCoordinate(price, firstValue.value);
	}

	public getNearestIndex(timestamp: UTCTimestamp): number | null {
		const list = this._series.bars().raw();

		if (list && list.length) {
			// tslint:disable-next-line: typedef
			return this.bsearch(list, (item) => item.time.timestamp, timestamp);
		}

		return null;
	}

	public getItemAtIndex(index: number): BarData | LineData | HistogramData | null {
		const list = this._series.bars().raw();

		if (list && list.length) {
			const seriesType = this._series.seriesType();

			// tslint:disable-next-line: typedef
			const plot = list[index];

			if (seriesType === 'Area' || seriesType === 'Histogram' || seriesType === 'Bar') {
				if (seriesType === 'Histogram') {
					return {
						time: plot.time.timestamp,
						color: plot.plot.value[4] ? this._series.palette().colorByIndex(plot.plot.value[4]) : undefined,
						value: plot.plot.value[0] as number,
					};
				}
				return {
					time: plot.time.timestamp,
					value: plot.plot.value[0] as number,
				};
			} else {
				return {
					open: plot.plot.value[0] as number,
					high: plot.plot.value[1] as number,
					low: plot.plot.value[2] as number,
					close: plot.plot.value[3] as number,
					time: plot.time.timestamp,
					glyphs: plot.plot.glyphs,
				};
			}
		}

		return null;
	}

	public getNearestItem(timestamp: UTCTimestamp): BarData | LineData | HistogramData | null {
		const index = this.getNearestIndex(timestamp);
		if (index === null) {
			return null;
		}

		return this.getItemAtIndex(index);
	}

	public setData(data: SeriesDataItemTypeMap[TSeriesType][]): void {
		this._dataUpdatesConsumer.applyNewData(this._series, data);
	}

	public update(bar: SeriesDataItemTypeMap[TSeriesType]): void {
		this._dataUpdatesConsumer.updateData(this._series, bar);
	}

	public setMarkers(data: SeriesMarker<Time>[]): void {
		const convertedMarkers = data.map((marker: SeriesMarker<Time>) => ({
			...marker,
			time: convertTime(marker.time),
		}));
		this._series.setMarkers(convertedMarkers);
	}

	public applyOptions(options: SeriesPartialOptionsMap[TSeriesType]): void {
		this._series.applyOptions(options);
	}

	public options(): Readonly<SeriesOptionsMap[TSeriesType]> {
		return clone(this._series.options());
	}

	private bsearch<T>(list: T[], predicate: (item: T) => UTCTimestamp, t: UTCTimestamp): number {
		if (!list.length) {
			return -1;
		}

		let left = 0;
		let right = list.length - 1;

		let middle = Math.floor((left + right) / 2);

		if (predicate(list[left]) >= t) {
			return left;
		}
		if (predicate(list[right]) <= t) {
			return right;
		}

		while (left !== right && left + 1 !== right) {
			if (predicate(list[middle]) < t) {
				left = middle;
			} else if (predicate(list[middle]) > t) {
				right = middle;
			} else {
				return middle;
			}

			middle = Math.floor((left + right) / 2);
		}

		if (predicate(list[right]) <= t) {
			return right;
		}

		return left;
	}
}
