import React, { useState } from 'react'
import DonorContext from './DonorContext';
const DonorState = (props) => {
    const host="http://localhost:5000";
    const DonorInitial=[];
    const [data,setdata]=useState(DonorInitial)
    const[hosp_id,sethosp_id]=useState("initial");
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
    //adding the user to hospital
    const addpatient=async(name,
        image,
        age,
        bloodGroup,
        city,
        certificate,
        description,
        hospital_id)=>{
            const url=`${host}/api/donor/newdonor`
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // "auth-token": token // Use the retrieved token here
                },
                body: JSON.stringify({name, image, age, bloodGroup, city, certificate, description, hospital: hospital_id}),

            });
        
            const json = await response.json();
            console.log(json);
    }
    const addhospital=async(name,city)=>{
        const url=`${host}/api/donor/newhosp`
        const response=await fetch(url,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({name,city})
        });
        const json=await response.json();
        console.log(json);
        console.log(name,city)
        // setdata([...data,json])
    }
    
   
    
    
  return (
    <DonorContext.Provider value={{getalldata,data,hosp_id,sethosp_id,addpatient,addhospital}}>
        {props.children}
    </DonorContext.Provider>
  )
};

export default DonorState;
