// Chart library
import { Chart as ChartJS, ArcElement, Tooltip, Legend ,LineElement,CategoryScale,PointElement,LinearScale } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend ,LineElement,CategoryScale,PointElement,LinearScale);
export const option={
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: true,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Line Chart - Multi Axis',
      },
    },
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };
export const Data={
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: '# of Votes',
        data: [10, 35, 48, 69, 75],
        borderColor: 'rgba(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132)',
        borderWidth : 3,
        pointBackgroundColor:'#fff',
        pointBorderColor:'#ddd',
        tension:0.3,
        },
        {
          data: [10, 15, 18, 29, 95],
          borderColor: '#f59e0b',
          backgroundColor: '#f59e0b',
          borderWidth : 3,
          pointBackgroundColor:'#fff',
          pointBorderColor:'#ddd',
          tension:0.3,
          },
        ],
}
export const DataPie={
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
        {
          label: '# of Votes',
          data: [10, 35, 48, 69, 75],
          borderColor: 'rgba(255, 99, 132)',
          backgroundColor:["#0d69d5","#0075ff","#f59e0b","#22c55e","#f44336"],
          borderWidth : 3,
          pointBackgroundColor:'#fff',
          pointBorderColor:'#ddd',
          tension:0.3,
          },
        ]
}
