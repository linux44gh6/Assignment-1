
import { Pie } from 'react-chartjs-2';

const CloudAccountRiskAssessmentChart = () => {
  const data = {
    labels: ['Failed', 'Warning', 'Not Available', 'Passed'],
    datasets: [
      {
        label: 'Risk Assessment',
        data: [15, 20, 10, 55],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)', 
          'rgba(255, 206, 86, 0.2)', 
          'rgba(201, 203, 207, 0.2)', 
          'rgba(75, 192, 192, 0.2)', 
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(201, 203, 207, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full">
      <h3 className="text-lg font-semibold mb-4">Cloud Account Risk Assessment</h3>
      <Pie data={data} />
    </div>
  );
};

export default CloudAccountRiskAssessmentChart;