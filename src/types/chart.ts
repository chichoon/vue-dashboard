import type { Dayjs } from 'dayjs';

export interface ChartDataType {
  series: Record<string, { name: string; color?: string }>;
  labels: (Dayjs | string)[];
  data: Record<string, number[]>;
}

export interface HeatMapChartInnerDataType {
  x: Dayjs | string;
  y: Dayjs | string;
  value: number;
}

export interface HeatMapChartDataType {
  series: Record<string, { name: string }>;
  labels: { x: (Dayjs | string)[]; y: (Dayjs | string)[] };
  data: Record<string, HeatMapChartInnerDataType[]>;
}
