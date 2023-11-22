import type { ChartDataType } from '@/types/chart';

export const INIT_CHART: ChartDataType = {
  series: {
    series1: { name: 'BarChart', color: '#FFFFFF' }
  },
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  data: {
    series1: []
  }
};

export const CHART_OPTIONS = {
  type: 'bar',
  cPadRatio: 0.1, // 바 사이의 패딩 간격
  width: '100%',
  padding: {
    bottom: 20
  },
  title: {
    show: true,
    text: 'Email Subscription',
    style: {
      color: '#FFFFFF'
    }
  },
  legend: {
    show: false
  },
  axesX: [
    {
      type: 'step',
      axisLineColor: '#FFFFFF',
      gridLineColor: '#FFFFFF30',
      labelStyle: {
        color: '#FFFFFF'
      }
    }
  ],
  axesY: [
    {
      type: 'linear',
      showGrid: true,
      showAxis: true,
      autoScaleRatio: 0.1,
      axisLineColor: '#FFFFFF',
      gridLineColor: '#FFFFFF40',
      labelStyle: {
        color: '#FFFFFF'
      }
    }
  ]
};
