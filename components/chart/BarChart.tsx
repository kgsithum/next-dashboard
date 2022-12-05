import React from 'react';
import { VictoryAxis, VictoryBar, VictoryChart, VictoryTheme } from 'victory';
import { SeriesDataType } from '../../pages/api/types/SeriesDataType';

export interface BarChartProps {
  chartData?: SeriesDataType;
}

const BarChart: React.FC<BarChartProps> = ({ chartData }) => {
  if (!chartData) {
    return;
  }

  return (
    <div>
      <div className="flex-1 text-center">{chartData.title}</div>
      <VictoryChart
        height={600}
        width={800}
        theme={VictoryTheme.material}
        domainPadding={20}
      >
        <VictoryAxis tickValues={[]} tickFormat={[]} />
        <VictoryAxis dependentAxis tickFormat={[]} />
        <VictoryBar
          alignment="start"
          data={chartData.data}
          x="date"
          y="value"
        />
      </VictoryChart>
    </div>
  );
};

export default BarChart;
