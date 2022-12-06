import React, { useEffect, useState } from 'react';
import { getAverageSentimentIndex } from '../../helpers/SeriesDataHelper';
import { SeriesDataType } from '../../pages/api/types/SeriesDataType';

export interface SentimentIndexProps {
  widgetData?: SeriesDataType;
}

const SentimentIndex: React.FC<SentimentIndexProps> = ({ widgetData }) => {
  const [sentimentIndex, setSentimentIndex] = useState<number>();

  useEffect(() => {
    setSentimentIndex(undefined);

    if (widgetData && widgetData.data.length > 0) {
      const avgIndex = getAverageSentimentIndex(widgetData.data);
      setSentimentIndex(avgIndex);
    }
  }, [widgetData]);

  if (!widgetData) {
    return <></>;
  }

  return (
    <div className="space-y-5">
      <div className="flex-1">Average US Sentiment Index (SENTUS)</div>

      {sentimentIndex !== undefined && (
        <div
          className={`flex-1 font-bold text-2xl${
            sentimentIndex <= 0 ? ' text-red-400' : ' text-green-400'
          }`}
        >
          {sentimentIndex}
        </div>
      )}
    </div>
  );
};

export default SentimentIndex;
