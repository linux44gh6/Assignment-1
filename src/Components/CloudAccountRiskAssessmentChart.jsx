
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import FetchData from '../customHooks/FetchData';


ChartJS.register(ArcElement, Tooltip, Legend);

const CloudAccountRiskAssessmentDoughnutChart = () => {
  const {cloudData,loading}=FetchData()
 
  let riskAssessment = null;
  if (!loading && cloudData && cloudData.CSPM && cloudData.CSPM[1]) {
    riskAssessment = cloudData.CSPM[1].riskAssessment;
  } 
  if(loading){
    return <h1>Loading........</h1>
  }
  const {failed,warning,notAvailable,passed}=riskAssessment
  
  const data = {
    datasets: [
      {
        label: 'Risk Assessment',
        data: [failed, warning, notAvailable, passed], 
        backgroundColor: [
          'red', // Failed
          'yellow', // Warning
          'gray', // Not Available
          'green', // Passed
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

  const labels = [
    { text: `Failed(${failed})`, color: 'rgba(255, 99, 132, 1)' },
    { text: `Warning(${warning})`, color: 'rgba(255, 206, 86, 1)' },
    { text: `Not Available(${notAvailable})`, color: 'rgba(201, 203, 207, 1)' },
    { text: `Passed(${passed})`, color: 'rgba(75, 192, 192, 1)' },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full flex">
      <div className="w-2/3">
        <h3 className="text- font-semibold mb-4">Cloud Account Risk Assessment</h3>
        <Doughnut data={data} />
      </div>
      <div className="w-1/3 flex flex-col justify-center">
        {labels.map((label, index) => (
          <div key={index} className="flex items-center mb-2">
            <div
              className="w-4 h-4 rounded-full mr-2"
              style={{ backgroundColor: label.color }}
            ></div>
            <span className="text-sm font-medium">{label.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CloudAccountRiskAssessmentDoughnutChart;
