import BigNumber from 'bignumber.js';
import { DataItem, SeriesDataType } from '../pages/api/types/SeriesDataType';
import { SeriesRawDataType } from '../pages/api/types/SeriesRawDataType';

const formatSeriesData = (rawData: SeriesRawDataType): SeriesDataType => {
  const dataItems: Array<DataItem> = rawData.data.dates.map(
    (dateItem, index) => {
      return { date: dateItem, value: rawData.data.values[index] };
    }
  );

  const seriesData: SeriesDataType = {
    title: rawData.description,
    data: dataItems,
  };

  return seriesData;
};

const generateScaledData = (
  data: Array<DataItem>,
  scale: number
): Array<DataItem> => {
  const updatedDataItems: Array<DataItem> = [];
  data.forEach((item) => {
    const newValue = getMultipliedValue(item.value, scale);
    updatedDataItems.push({ date: item.date, value: newValue });
  });

  return updatedDataItems;
};

const getMultipliedValue = (value: number, scale: number): number => {
  const valueBigNumber = new BigNumber(value);
  const scaleBigNumber = new BigNumber(scale);

  return valueBigNumber.multipliedBy(scaleBigNumber).toNumber();
};

const getAverageSentimentIndex = (data: Array<DataItem>): number => {
  const startValueBigNumber = new BigNumber(data[0].value);
  const endValueBigNumber = new BigNumber(data[data.length - 1].value);
  const changedIndexValue = endValueBigNumber.minus(startValueBigNumber);

  return changedIndexValue.toNumber();
};

const getPopulationGrowth = (data: Array<DataItem>): number => {
  return data[data.length - 1].value - data[0].value;
};

export {
  formatSeriesData,
  generateScaledData,
  getAverageSentimentIndex,
  getPopulationGrowth,
};
