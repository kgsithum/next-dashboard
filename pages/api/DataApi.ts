import * as DataApi from './DataApiClient';
import { QueryType } from './types/QueryType';

// Get data
export const getSeriesData = async (
  code: string,
  query: QueryType
): Promise<JSON> => {
  return await DataApi.get(`/api/series/${code}/`, query);
};
