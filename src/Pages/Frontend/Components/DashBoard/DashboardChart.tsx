/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Line } from '@ant-design/charts';

const DashboardChart: React.FC = () => {
  const data = [
    { Month: 'Jan', value: 3 },
    { Month: 'Feb', value: 4 },
    { Month: 'Mar', value: 3.5 },
    { Month: 'Apr', value: 5 },
    { Month: 'May', value: 4.9 },
    { Month: 'Jun', value: 6 },
    { Month: 'Jul', value: 7 },
    { Month: 'Aug', value: 9 },
    { Month: 'sep', value: 13 },
    { Month: 'Oct', value: 13 },
    { Month: 'Nov', value: 13 },
    { Month: 'Dec', value: 13 },
  ];

  const config = {
    data,
    height: 200,
    // width: 700,
    xField: 'Month',
    yField: 'value',
    point: {
      size: 5,
      shape: 'diamond',
    },
  };
  // eslint-disable-next-line react/jsx-filename-extension
  return (
    <div className=" p-0 container-fluid">
  <Line className="DashboardChart" {...config} />
  </div>
  );
};
export default DashboardChart
