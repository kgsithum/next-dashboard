import { useState } from 'react';
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
  //const [scaleValue, setScaleValue] = useEffect<Number>();

  return (
    <div className="min-h-screen flex flex-col items-center">
      <Header
        fromDate={fromDate}
        toDate={toDate}
        selectFromDate={(date: Date) => setFromDate(formatDate(date))}
        selectToDate={(date: Date) => setToDate(formatDate(date))}
      />
      <div className="flex flex-col sm:flex-row p-2 gap-5">
        <div>
          <Chart
            type={ChartType.LINE}
            code={SeriesCodeType.CONFUS}
            fromDate={fromDate}
            toDate={toDate}
          />
        </div>
        <div>
          <Chart
            type={ChartType.LINE}
            code={SeriesCodeType.CONFUS}
            fromDate={fromDate}
            toDate={toDate}
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
        <div className="pl-10 pt-32 space-y-20 mb-12 border border-black">
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
