import type { Dayjs } from 'dayjs';

export interface ChartDataType {
  series: Record<string, { name: string; color?: string }>;
  labels: (Dayjs | string)[];
  data: Record<string, number[]>;
}
