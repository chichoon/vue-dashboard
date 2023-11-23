import type { ChartDataType } from '@/types/chart';

export const INIT_CHART: ChartDataType = {
  series: {
    series1: { name: 'LineChart', color: '#FFFFFF' }
  },
  labels: [],
  data: {
    series1: []
  }
};

export const CHART_OPTIONS = {
  type: 'line',
  width: '100%',
  //   height: '100%',
  padding: {
    bottom: 20
  },
  title: {
    show: true,
    text: 'Daily Sales',
    style: {
      color: '#FFFFFF'
    }
  },
  legend: {
    show: false
  },
  axesX: [
    {
      type: 'time',
      timeFormat: 'mm:ss',
      interval: 'second',
      axisLineColor: '#FFFFFF', // x축 선 색상
      gridLineColor: '#FFFFFF40', // x축 그리드 선 색상
      labelStyle: {
        // 축에 출력되는 라벨의 스타일 설정
        color: '#FFFFFF' // 투명도는 안되는듯?
      }
      // title: { // 축의 제목 추가 가능
      //   use: true,
      //   text: 'aaa',
      //   color: '#FF0000'
      // }
    }
  ],
  axesY: [
    {
      type: 'linear',
      showGrid: true,
      autoScaleRatio: 0.1,
      axisLineColor: '#FFFFFF', // y축 선 색상
      gridLineColor: '#FFFFFF40', // y축 그리드 선 색상
      labelStyle: {
        // 축에 출력되는 라벨의 스타일 설정
        color: '#FFFFFF'
      }
    }
  ]
};
