import type { HeatMapChartDataType } from '@/types/chart';

export const X_LABELS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];
export const Y_LABELS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const INIT_CHART: HeatMapChartDataType = {
  series: {
    series1: { name: 'HeatMapChart' }
  },
  labels: {
    x: X_LABELS,
    y: Y_LABELS
  },
  data: {
    series1: []
  }
};

export const CHART_OPTIONS = {
  type: 'heatMap',
  width: '100%',
  padding: {
    bottom: 20
  },
  title: {
    show: true,
    text: 'Completed Tasks',
    style: {
      color: '#FFFFFF'
    }
  },
  indicator: {
    use: true // ?
  },
  legend: {
    show: false
  },
  axesX: [
    {
      type: 'step',
      showGrid: false,
      axisLineColor: '#FFFFFF',
      labelStyle: {
        color: '#FFFFFF'
      }
    }
  ],
  axesY: [
    {
      type: 'step',
      showGrid: false,
      axisLineColor: '#FFFFFF',
      labelStyle: {
        color: '#FFFFFF'
      }
    }
  ],
  heatMapColor: {
    min: '#55AE59',
    max: '#EEEEEE',
    rangeCount: 10
  },
  tooltip: {
    use: true
  }
};
