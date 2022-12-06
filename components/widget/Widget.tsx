import React, { useEffect, useState } from 'react';
import { formatSeriesData } from '../../helpers/SeriesDataHelper';
import * as DataApi from '../../pages/api/DataApi';
import { QueryType } from '../../pages/api/types/QueryType';
import { SeriesCodeType } from '../../pages/api/types/SeriesCode';
import { SeriesDataType } from '../../pages/api/types/SeriesDataType';
import { WidgetType } from '../../pages/api/types/WidgetType';
import PopulationGrowth from './PopulationGrowth';
import SentimentIndex from './SentimentIndex';

export interface WidgetProps {
  code: SeriesCodeType;
  type: WidgetType;
  fromDate: string;
  toDate: string;
}

const Widget: React.FC<WidgetProps> = ({ code, type, fromDate, toDate }) => {
  const [widgetData, setWidgetData] = useState<SeriesDataType>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const query: QueryType = { from: fromDate, to: toDate, format: 'json' };

  useEffect(() => {
    (async (): Promise<void> => {
      const data = await DataApi.getSeriesData(code, query);
      const formattedData = formatSeriesData(data);
      setWidgetData(formattedData);
      setIsLoading(false);
    })();
  }, [fromDate, toDate]);

  if (isLoading) {
    return <></>;
  }

  if (type === WidgetType.SENTIMENT_INDEX) {
    return <SentimentIndex widgetData={widgetData} />;
  }

  if (type === WidgetType.POPULATION_GROWTH) {
    return <PopulationGrowth widgetData={widgetData} />;
  }

  return <></>;
};

export default Widget;
