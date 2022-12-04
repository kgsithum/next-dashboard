import React from 'react';

export interface BarChartProps {
  name: string;
}

const BarChart: React.FC<BarChartProps> = ({ name }) => {
  return <>{name}</>;
};

export default BarChart;
