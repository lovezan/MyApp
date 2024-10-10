import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const BloodPressureChart = () => {
  const data = {
    labels: ['Oct, 2023', 'Nov, 2023', 'Dec, 2023', 'Jan, 2024', 'Feb, 2024', 'Mar, 2024'],
    datasets: [
      {
        label: 'Systolic',
        data: [120, 118, 140, 110, 155, 160],
        borderColor: 'rgba(235, 99, 132, 1)',
        backgroundColor: 'rgba(235, 99, 132, 0.2)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Diastolic',
        data: [100, 90, 105, 80, 95, 78],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Blood Pressure (Last 6 months)',
      },
    },
    scales: {
      y: {
        min: 60,
        max: 180,
        ticks: {
          stepSize: 20,
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default BloodPressureChart;
