
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const CloudAccountStatusChart = () => {
  const data = {
    labels: ['Connected', 'Not Connected'],
    datasets: [
      {
        label: 'Cloud Account Status',
        data: [70, 30], 
        backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)'],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full">
      <h3 className="text-lg font-semibold mb-4">Cloud Account Status</h3>
      <Pie data={data} />
    </div>
  );
};

export default CloudAccountStatusChart;
