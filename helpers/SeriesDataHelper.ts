import { DataItem, SeriesDataType } from '../pages/api/types/SeriesDataType';

const FormatSeriesData = (rawData: JSON): SeriesDataType => {
  const dataItems: Array<DataItem> = [];
  rawData.data.dates.forEach((date, index) => {
    dataItems.push({ date: date, value: rawData.data.values[index] });
  });

  const seriesData: SeriesDataType = {
    title: rawData.description,
    data: dataItems,
  };

  return seriesData;
};

export default FormatSeriesData;
