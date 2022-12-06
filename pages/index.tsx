import { useEffect, useState } from 'react';
import { Range } from 'react-input-range';
import Chart from '../components/chart/Chart';
import Header from '../components/Header';
import Widget from '../components/widget/Widget';
import formatDate from '../helpers/DateHelper';
import { ChartType } from './api/types/ChartType';
import { SeriesCodeType } from './api/types/SeriesCode';
import { WidgetType } from './api/types/WidgetType';

const Home: React.FC = () => {
  const [fromDate, setFromDate] = useState('2015-01-01');
  const [toDate, setToDate] = useState('2021-01-01');
  const [scaleValue, setScaleValue] = useState<number | Range>(1);

  useEffect(() => {
    //console.log(scaleValue);
  }, [scaleValue]);

  return (
    <div className="min-h-screen flex flex-col items-center">
      <Header
        fromDate={fromDate}
        toDate={toDate}
        scaleValue={scaleValue}
        selectFromDate={(date: Date) => setFromDate(formatDate(date))}
        selectToDate={(date: Date) => setToDate(formatDate(date))}
        selectScale={(value: number | Range) => setScaleValue(value)}
      />
      <div className="flex flex-col sm:flex-row p-2 gap-5">
        <div>
          <Chart
            type={ChartType.LINE}
            code={SeriesCodeType.CONFUS}
            fromDate={fromDate}
            toDate={toDate}
            scaleValue={scaleValue}
          />
        </div>
        <div>
          <Chart
            type={ChartType.LINE}
            code={SeriesCodeType.CONFUS}
            fromDate={fromDate}
            toDate={toDate}
            scaleValue={scaleValue}
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row p-2 gap-5">
        <div>
          <Chart
            type={ChartType.BAR}
            code={SeriesCodeType.RETAUS}
            fromDate={fromDate}
            toDate={toDate}
          />
        </div>
        <div className="pl-5 pr-5 pt-32 space-y-20 mb-12 border border-black">
          <Widget
            type={WidgetType.SENTIMENT_INDEX}
            code={SeriesCodeType.SENTUS}
            fromDate={fromDate}
            toDate={toDate}
          />
          <Widget
            type={WidgetType.POPULATION_GROWTH}
            code={SeriesCodeType.POPUS}
            fromDate={fromDate}
            toDate={toDate}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
