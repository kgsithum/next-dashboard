import React from 'react';

export interface LineChartProps {
  name: string;
}

const LineChart: React.FC<LineChartProps> = ({ name }) => {
  return <>{name}</>;
};

export default LineChart;
