import React from 'react';
import {
  Chart as Chartjs,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

Chartjs.register(Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const BarChart = ({ BarChartData }: any) => {
  console.log(BarChartData);
  const data = {
    labels: BarChartData?.labels,
    datasets: [
      {
        label: ['month'],
        data: BarChartData?.data,
        backgroundColor: BarChartData?.backgroundColors,
        borderWidth: 0,
        cutout: '90%',
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
    scales: {
      x: {
        grid: {
          display: false, // Hide the x-axis grid lines
        },
      },
      y: {
        grid: {
          display: false, // Hide the y-axis grid lines
        },
      },
    },
    layout: {
      padding: {
        // left: 20,
        // right: 20,
        // top: 20,
        // bottom: 20
      },
    },
    categorySpacing: 0, // Set category spacing to 0 to tightly pack bars
    barThickness: 20,
    elements: {
      bar: {
        backgroundColor: '#F5F5F5',
        borderRadius: 10, // Set borderRadius for the bars
      },
    },
  };

  return (
    <div className=' h-[300px]'>
      {/* @ts-ignore */}
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
