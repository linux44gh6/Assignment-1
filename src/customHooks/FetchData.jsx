import { useEffect, useState } from "react";


const FetchData = () => {
    const [cloudData,setCloudData]=useState([])
  const [loading,setLoading]=useState(true)
  useEffect(()=>{
   try{
    fetch('/widge.json')
    .then(res=>res.json())
    .then(data=>setCloudData(data))
   }
   catch(err){
    console.log(err.message);
   }
   const loadingTimeout = setTimeout(() => {
    setLoading(false);
  }, 100);
  return ()=>clearTimeout(loadingTimeout)
  },[])
    return {cloudData,loading}
    
};

export default FetchData;