import React, { useEffect, useState } from 'react';
import { Range } from 'react-input-range';
import { VictoryAxis, VictoryChart, VictoryLine, VictoryTheme } from 'victory';
import { generateScaledData } from '../../helpers/SeriesDataHelper';
import { DataItem, SeriesDataType } from '../../pages/api/types/SeriesDataType';

export interface LineChartProps {
  chartData?: SeriesDataType;
  scaleValue?: number | Range;
}

const LineChart: React.FC<LineChartProps> = ({ chartData, scaleValue }) => {
  const [scaledData, setScaledData] = useState<Array<DataItem>>();
  useEffect(() => {
    if (chartData && scaleValue) {
      const generatedScaledData = generateScaledData(
        chartData.data,
        scaleValue
      );
      setScaledData(generatedScaledData);
    }
  }, [chartData]);

  if (!chartData) {
    return <></>;
  }

  return (
    <div>
      <div className="flex-1 text-center">{chartData.title}</div>
      <VictoryChart
        height={500}
        width={500}
        theme={VictoryTheme.material}
        domainPadding={20}
      >
        <VictoryAxis tickValues={[]} tickFormat={[]} />
        <VictoryAxis dependentAxis tickFormat={[]} />
        <VictoryLine
          style={{
            data: { stroke: '#c43a31' },
            parent: { border: '1px solid #ccc' },
          }}
          data={chartData.data}
          x="date"
          y="value"
        />
        {scaledData && (
          <VictoryLine
            style={{
              data: { stroke: '#c43a31' },
              parent: { border: '1px solid #ccc' },
            }}
            data={scaledData}
            x="date"
            y="value"
          />
        )}
      </VictoryChart>
    </div>
  );
};

export default LineChart;
