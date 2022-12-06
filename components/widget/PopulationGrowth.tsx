import React, { useEffect, useState } from 'react';
import { getPopulationGrowth } from '../../helpers/SeriesDataHelper';
import { SeriesDataType } from '../../pages/api/types/SeriesDataType';

export interface PopulationGrowthProps {
  widgetData?: SeriesDataType;
}

const PopulationGrowth: React.FC<PopulationGrowthProps> = ({ widgetData }) => {
  const [populattionGrowth, setPopulattionGrowth] = useState<number>();

  useEffect(() => {
    setPopulattionGrowth(undefined);

    if (widgetData && widgetData.data.length > 0) {
      const populattion = getPopulationGrowth(widgetData.data);
      setPopulattionGrowth(populattion);
    }
  }, [widgetData]);

  if (!widgetData) {
    return <></>;
  }

  return (
    <div className="space-y-5">
      <div className="flex-1">
        Population growth during the selected period (POPUS)
      </div>
      {populattionGrowth !== undefined && (
        <div className="flex-1 text-2xl">{populattionGrowth}</div>
      )}
    </div>
  );
};

export default PopulationGrowth;
