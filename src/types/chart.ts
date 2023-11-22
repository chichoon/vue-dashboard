import type { Dayjs } from 'dayjs';

export interface ChartDataType {
  series: Record<string, { name: string; color?: string }>;
  labels: Dayjs[];
  data: Record<string, number[]>;
}
