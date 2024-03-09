import { BarPrice } from '../model/bar';
import { Coordinate } from '../model/coordinate';
import { SeriesMarker } from '../model/series-markers';
import { SeriesOptionsMap, SeriesPartialOptionsMap, SeriesType } from '../model/series-options';
import { UTCTimestamp } from '../model/time-data';

import { BarData, HistogramData, LineData, SeriesDataItemTypeMap, Time } from './data-consumer';

/** Interface to be implemented by the object in order to be used as a price formatter */
export interface IPriceFormatter {
	/**
	 * Formatting function
	 * @param price - original price to be formatted
	 * @returns - formatted price
	 */
	format(price: BarPrice): string;
}

export interface ISeriesApi<TSeriesType extends SeriesType> {
	/**
	 * Returns current price formatter
	 * @returns - interface to the price formatter object that can be used to format prices in the same way as the chart does
	 */
	priceFormatter(): IPriceFormatter;

	/** Converts specified series price to pixel coordinate according to the chart price scale
	 * @param price - input price to be converted
	 * @returns - pixel coordinate of the price level on the chart
	 */
	priceToCoordinate(price: BarPrice): Coordinate | null;

	/**
	 * Applies new options to the existing series
	 * @param options - any subset of options
	 */
	applyOptions(options: SeriesPartialOptionsMap[TSeriesType]): void;

	/**
	 * Returns currently applied options
	 * @returns full set of currently applied options, including defaults
	 */
	options(): Readonly<SeriesOptionsMap[TSeriesType]>;

	/**
	 * Sets or replaces series data
	 * @param data - ordered (earlier time point goes first) array of data items. Old data is fully replaced with the new one.
	 */
	setData(data: SeriesDataItemTypeMap[TSeriesType][]): void;

	/**
	 * Get the item closest to timestamp
	 * @param timestamp - timestamp
	 */
	getNearestItem(timestamp: UTCTimestamp): BarData | LineData | HistogramData | null;

	/**
	 * Get the index of item closest to timestamp
	 * @param timestamp - timestamp
	 */
	getNearestIndex(timestamp: UTCTimestamp): number | null;

	/**
	 * Returns the item at the specified index
	 * @param index - index to get data item at
	 */
	getItemAtIndex(index: number): BarData | LineData | HistogramData | null;

	/**
	 * Adds or replaces a new bar
	 * @param bar - a single data item to be added. Time of the new item must be greater or equal to the latest existing time point.
	 * If the new item's time is equal to the last existing item's time, then the existing item is replaced with the new one.
	 */
	update(bar: SeriesDataItemTypeMap[TSeriesType]): void;

	/**
	 * Sets markers for the series
	 * @param data array of series markers. This array should be sorted by time. Several markers with same time are allowed.
	 */
	setMarkers(data: SeriesMarker<Time>[]): void;
}
