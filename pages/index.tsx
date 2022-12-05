import { useState } from 'react';
import Chart from '../components/chart/Chart';
import Header from '../components/Header';
import formatDate from '../helpers/DateHelper';
import { ChartType } from './api/types/ChartType';
import { SeriesCodeType } from './api/types/SeriesCode';

const Home: React.FC = () => {
  const [fromDate, setFromDate] = useState('2015-01-01');
  const [toDate, setToDate] = useState('2021-01-01');

  return (
    <div className="min-h-screen flex flex-col items-center">
      <Header
        fromDate={fromDate}
        toDate={toDate}
        selectFromDate={(date: Date) => setFromDate(formatDate(date))}
        selectToDate={(date: Date) => setToDate(formatDate(date))}
      />
      <div className="flex flex-col sm:flex-row p-2 gap-5">
        <div className="flex-1 bg-blue-50">
          <Chart
            type={ChartType.LINE}
            code={SeriesCodeType.CONFUS}
            fromDate={fromDate}
            toDate={toDate}
          />
        </div>
        <div className="flex-1 bg-green-50">
          <Chart
            type={ChartType.LINE}
            code={SeriesCodeType.CONFUS}
            fromDate={fromDate}
            toDate={toDate}
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row p-2 gap-5">
        <div className="flex-1">
          <Chart
            type={ChartType.BAR}
            code={SeriesCodeType.RETAUS}
            fromDate={fromDate}
            toDate={toDate}
          />
        </div>
        <div className="flex-1">COMPONENT 4</div>
      </div>
    </div>
  );
};

export default Home;
