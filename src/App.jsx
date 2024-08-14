
import './App.css'
import { LuRefreshCcw } from "react-icons/lu";
import { HiDotsVertical } from "react-icons/hi";
import { IoIosTime } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import CloudAccountRiskAssessmentChart from './Components/CloudAccountRiskAssessmentChart';
import CloudAccountStatusChart from './Components/CloudAccountStatusChart';
import CWPPDashboard from './Components/CWPP-dashboard/CWPPDashboard';

function App() {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">CNAPP Dashboard</a>
        </div>
        <div className="flex-none">
          <ul className="flex items-center gap-2 px-1">

            <li><button className='btn'>Add Widget <span className='text-lg'>+</span></      button></li>
            <span className='btn'><LuRefreshCcw className='text-3xl'></LuRefreshCcw></span>
            <span className='btn'><HiDotsVertical className='text-3xl'></HiDotsVertical></span>
            <span><div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn m-1 flex gap-0 border-primary"><IoIosTime className='text-3xl'></IoIosTime><div className="divider divider-horizontal divider-primary"></div> <p className='text-primary flex gap-2'>Last 2 days</p><IoIosArrowDown></IoIosArrowDown></div>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
              </ul>
            </div></span>
          </ul>
        </div>
      </div>

    <div>
   <div>
    <h1 className='font-semibold text-left mb-2'>CSPM Executive Dashboard</h1>
   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className=' border'>
        <CloudAccountStatusChart className="" />
        </div>
        <div className='border'>
        <CloudAccountRiskAssessmentChart />
        </div>
        <div className="flex items-center justify-center bg-white p-4 rounded-lg shadow-md w-full border">
          <button className="  py-2 px-4 rounded-lg">
            + Add Widget
          </button>
        </div>
      </div>
   </div>
   <div className='mt-5'>
    <h1 className='text-left font-semibold'>CWPP Dashboard</h1>
    <CWPPDashboard></CWPPDashboard>
   </div>
    </div>
    </>
  )
}

export default App
