
import './App.css'
import { LuRefreshCcw } from "react-icons/lu";
import { HiDotsVertical } from "react-icons/hi";
import { IoIosTime } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import CloudAccountRiskAssessmentChart from './Components/CloudAccountRiskAssessmentChart';
import CloudAccountStatusChart from './Components/CloudAccountStatusChart';
import CWPPDashboard from './Components/CWPP-dashboard/CWPPDashboard';
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
function App() {
  const [isAsideVisible, setAsideVisible] = useState(false);
  const handleToRef=()=>{
    window.location.reload()
  }
  const toogleAside=()=>{
    setAsideVisible(!isAsideVisible);
  }
 
  return (
    <>
    <div className=' w-72 mx-auto mb-1'>
    <label className="input input-bordered flex items-center gap-2">
  <input type="text" className="grow" placeholder="Search" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label>
    </div>
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">CNAPP Dashboard</a>
      </div>
      <div className="flex-none">
        <ul className="flex items-center gap-2 px-1">
          <li>
            <button onClick={toogleAside} className="btn">
              Add Widget <span className="text-lg">+</span>
            </button>
          </li>
          <span onClick={handleToRef} className="btn">
            <LuRefreshCcw className="text-3xl" />
          </span>
          <span className="btn">
            <HiDotsVertical className="text-3xl" />
          </span>
          <span>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn m-1 flex gap-0 border-primary"
              >
                <IoIosTime className="text-3xl" />
                <div className="divider divider-horizontal divider-primary"></div>
                <p className="text-primary flex gap-2">Last 2 days</p>
                <IoIosArrowDown />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          </span>
        </ul>
      </div>
    </div>

    <div>
      <h1 className="font-semibold text-left mb-2">CSPM Executive Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border">
          <CloudAccountStatusChart />
        </div>
        <div className="border">
          <CloudAccountRiskAssessmentChart />
        </div>
        <div className="flex items-center justify-center bg-white p-4 rounded-lg shadow-md w-full border">
          <button onClick={toogleAside} className="border font-semibold bg-gray-100 px-4 py-2 rounded-lg">
            + Add Widget
          </button>
        </div>
      </div>
    </div>

    <div className="mt-5">
      <h1 className="text-left font-semibold">CWPP Dashboard</h1>
      <CWPPDashboard />
    </div>

   
    {isAsideVisible && (
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-200 shadow-lg z-50 p-4">
       <div className=' bg-blue-800 px-4 py-2'>
       <button
          onClick={toogleAside}
          className="absolute top-5  right-8 text-white text-3xl"
        >
          &times;
        </button>
        <h2 className="text-xl text-left text-white mb-4">Add Widget</h2>
       </div>
        <div>
        <Tabs>
    <TabList>
      <Tab>CSPM</Tab>
      <Tab>CWPP</Tab>
      <Tab>Image</Tab>
      <Tab>Ticket</Tab>
    </TabList>

    <TabPanel>
   <div className=' space-y-3 '>
   <div className=' border border-slate-300 rounded-md'>
   <div className="form-control w-36">
  <label className="label cursor-pointer">
    <input type="checkbox" defaultChecked className=" text-5xl" />
    <span className="label-text text-blue-800 font-semibold">Cloud Accounts</span>
  </label>
</div>
   </div>
   <div className=' border border-slate-300 rounded-md'>
   <div className="form-control w-60">
  <label className="label cursor-pointer">
    <input type="checkbox" defaultChecked className="checkbox-blue-800" />
    <span className="label-text text-blue-800 font-semibold">Cloud Account Risk Assessment</span>
  </label>
</div>
   </div>
   </div>
    </TabPanel>
    <TabPanel>
      <h2>Not Available</h2>
    </TabPanel>
    <TabPanel>
      <h2>Not Available</h2>
    </TabPanel>
    <TabPanel>
      <h2>Not Available</h2>
    </TabPanel>
  </Tabs>
        </div>
       <div className=''>
        <div className='flex gap-2 w-20 mx-auto mt-[50%] me-[20%]'>
          <button className='btn border border-blue-800 text-blue-800'>Cancel</button>
          <button className='btn border border-blue-800 bg-blue-800 text-white'>Confirm</button>
        </div>
       </div>
      </div>
    )}

   
    {isAsideVisible && (
      <div
        onClick={toogleAside}
        className="fixed inset-0 bg-black opacity-50 z-40"
      ></div>
    )}
  </>
  )
}

export default App
