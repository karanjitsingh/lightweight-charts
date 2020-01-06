import { TimePointIndex } from './time-data';

export type PlotValue = number | null | undefined;

export interface Plot {
	value: PlotValue[];
}

export interface PlotRow<TimeType, TPlot extends Plot> {
	readonly index: TimePointIndex;
	readonly time: TimeType;
	readonly plot: TPlot;
}
