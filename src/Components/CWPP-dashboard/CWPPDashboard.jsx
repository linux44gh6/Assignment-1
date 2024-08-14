
const CWPPDashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      
    
     <div className="bg-white p-6 h-[300px] border">
     <h2 className="text-xl font-semibold mb-2 ">Top 5 Namespace-Specific Alerts</h2>
     <div className=" h-[300px] rounded-lg shadow-md flex items-center justify-center">
       
       <div className="text-center">
       
         <p className="text-gray-500">No graph data available</p>
       </div>
     </div>
  
     </div>
     <div className="bg-white p-6 h-[300px] border">
     <h2 className="text-xl font-semibold mb-2 ">Workload Alerts</h2>
     <div className=" h-[300px] rounded-lg shadow-md flex items-center justify-center">
       
       <div className="text-center">
       
         <p className="text-gray-500">No graph data available</p>
       </div>
     </div>
  
     </div>
    
      <div className="bg-white p-6 h-[300px] border rounded-lg shadow-md flex items-center justify-center">
        <button className="text-blue-500 font-semibold bg-gray-100 px-4 py-2 rounded-lg">
          + Add Widget
        </button>
      </div>

    </div>
  );
};

export default CWPPDashboard;
