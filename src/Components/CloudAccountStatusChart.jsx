
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const CloudAccountStatusDoughnutChart = () => {
  const data = {
   
    datasets: [
      {
        label: 'Cloud Account Status',
        data: [70, 30], 
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 99, 132, 0.2)', 
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)', 
          'rgba(255, 99, 132, 1)', 
        ],
        borderWidth: 1,
      },
    ],
  };

  const labels = [
    { text: 'Connected', color: 'rgba(54, 162, 235, 1)' },
    { text: 'Not Connected', color: 'rgba(255, 99, 132, 1)' },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full flex">
      <div className="w-full">
        <h3 className="text-lg font-semibold mb-4">Cloud Account Status</h3>
        <Doughnut data={data} />
      </div>
      <div className="w-1/3 flex flex-col justify-center">
        {labels.map((label, index) => (
          <div key={index} className="flex items-center mb-2">
            <div
              className="w-4 h-4 rounded-full mr-2"
              style={{ backgroundColor: label.color }}
            ></div>
            <span className="text-sm font-medium">{label.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CloudAccountStatusDoughnutChart;
