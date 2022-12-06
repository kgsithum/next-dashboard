import React, { useEffect, useState } from 'react';
import { formatSeriesData } from '../../helpers/SeriesDataHelper';
import * as DataApi from '../../pages/api/DataApi';
import { ChartType } from '../../pages/api/types/ChartType';
import { QueryType } from '../../pages/api/types/QueryType';
import { SeriesCodeType } from '../../pages/api/types/SeriesCode';
import { SeriesDataType } from '../../pages/api/types/SeriesDataType';
import BarChart from './BarChart';
import LineChart from './LineChart';

export interface ChartProps {
  code: SeriesCodeType;
  type: ChartType;
  fromDate: string;
  toDate: string;
}

const Chart: React.FC<ChartProps> = ({ code, type, fromDate, toDate }) => {
  const [chartData, setChartData] = useState<SeriesDataType>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const query: QueryType = { from: fromDate, to: toDate, format: 'json' };

  useEffect(() => {
    (async (): Promise<void> => {
      const data = await DataApi.getSeriesData(code, query);
      const formattedData = formatSeriesData(data);
      setChartData(formattedData);
      setIsLoading(false);
    })();
  }, [fromDate, toDate]);

  if (isLoading) {
    return <></>;
  }

  if (type === ChartType.BAR) {
    return <BarChart chartData={chartData} />;
  }

  if (type === ChartType.LINE) {
    return <LineChart chartData={chartData} />;
  }

  return <></>;
};

export default Chart;
