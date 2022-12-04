import { useEffect, useState } from 'react';
import BarChart from '../components/chart/barChart';
import LineChart from '../components/chart/lineChart';
import Header from '../components/Header';
import formatDate from '../helpers/DateHelper';

const Home: React.FC = () => {
  const [fromDate, setFromDate] = useState('2015-01-01');
  const [toDate, setToDate] = useState('2021-01-01');

  useEffect(() => {
    console.log('From', fromDate);
    console.log('To', toDate);
  }, [fromDate, toDate]);

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
          <LineChart name="LINE 1" />
        </div>
        <div className="flex-1 bg-green-50">
          <LineChart name="LINE 2" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row p-2 gap-5">
        <div className="flex-1 bg-yellow-50">
          <BarChart name="BAR 1" />
        </div>
        <div className="flex-1 bg-orange-50">COMPONENT 4</div>
      </div>
    </div>
  );
};

export default Home;
