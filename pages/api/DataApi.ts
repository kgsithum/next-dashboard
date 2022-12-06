import * as DataApi from './DataApiClient';
import { QueryType } from './types/QueryType';
import { SeriesRawDataType } from './types/SeriesRawDataType';

// Get data
export const getSeriesData = async (
  code: string,
  query: QueryType
): Promise<SeriesRawDataType> => {
  return await DataApi.get(`/api/series/${code}/`, query);
};
