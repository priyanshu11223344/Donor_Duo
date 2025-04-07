import React, { useState } from 'react'
import DonorContext from './DonorContext';
const DonorState = (props) => {
    const host="http://localhost:5000";
    const DonorInitial=[];
    

   

    const [data,setdata]=useState(DonorInitial)
    const getalldata=async()=>{

        const url=`${host}/api/donor/hospitals`;
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                // "auth-token": token // Use the retrieved token here
            },
        });
    
        const json = await response.json();
        //  console.log(json);
        setdata(json);

    }
    
   
    
    
  return (
    <DonorContext.Provider value={{getalldata,data}}>
        {props.children}
    </DonorContext.Provider>
  )
};

export default DonorState;
