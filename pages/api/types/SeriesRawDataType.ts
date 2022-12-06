type Data = {
  dates: Array<string>;
  status: Array<string>;
  values: Array<number>;
};

export type SeriesRawDataType = {
  additional_metadata: Array<any>;
  data: Data;
  dataset: string;
  description: string;
  frequency: string;
  geography: string;
  ticker: string;
  units: any;
};
