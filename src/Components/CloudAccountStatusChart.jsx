
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import FetchData from '../customHooks/FetchData';

ChartJS.register(ArcElement, Tooltip, Legend);

const CloudAccountStatusDoughnutChart = () => {
  const {cloudData,loading}=FetchData()
  let cloudAccountStatus = null;
  if (!loading && cloudData && cloudData.CSPM && cloudData.CSPM[0]) {
     cloudAccountStatus = cloudData.CSPM[0].cloudAccountStatus;
  } 
  if(loading){
    return <h1>Loading......</h1>
  }
 
  const {connected,notConnected}=cloudAccountStatus
  const data = {
    datasets: [
      {
        label: 'Cloud Account Status',
        data: [connected, notConnected], 
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
    { text: `Connected(${connected})`, color: 'rgba(54, 162, 235, 1)' },
    { text: `Not Connected(${notConnected})`, color: 'rgba(255, 99, 132, 1)' },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full flex">
      <div className="w-2/3">
        <h3 className=" font-semibold mb-4">Cloud Account Status</h3>
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
