import React from 'react';
import { Chart as Chartjs, Tooltip, Legend, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

Chartjs.register(Tooltip, Legend, ArcElement);

const DoughoutChart = ({ DoughoutData }: any) => {
  const data = {
    datasets: [
      {
        label: 'Yes',
        data: DoughoutData?.data,
        backgroundColor: DoughoutData?.backgroundColor,
        borderWidth: 0,
        circumference: 360,
        cutout: '80%',
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    layout: {},
  };
  const backgroundCircle = {
    id: 'backgroundCircle',
    //@ts-ignore
    beforeDatasetsDraw(chart, upluginOptions, args) {
      const ctx = chart.ctx;
      ctx.save();
      const xCoo = chart.getDatasetMeta(0).data[0].x;
      const yCoo = chart.getDatasetMeta(0).data[0].y;
      const innerRadius = chart.getDatasetMeta(0).data[0].innerRadius;
      const outerRadius = chart.getDatasetMeta(0).data[0].outerRadius;
      const width = outerRadius - innerRadius + 20;
      const angle = Math.PI / 180;
      ctx.beginPath();
      ctx.lineWidth = width;
      ctx.arc(xCoo, yCoo, outerRadius - width / 2 + 10, 0, angle * 360, false);
      ctx.strokeStyle = '#f5f5f5';
      ctx.stroke();
    },
  };
  return (
    <Doughnut data={data} options={options} plugins={[backgroundCircle]} />
  );
};
export default DoughoutChart;
