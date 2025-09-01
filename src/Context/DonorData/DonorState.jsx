import React, { useState } from 'react'
import DonorContext from './DonorContext';
import { toast } from 'react-toastify';
const DonorState = (props) => {
    const host="http://localhost:5000";
    const DonorInitial=[];
    const hospinfo=[];
    const [data,setdata]=useState(DonorInitial)
    const[hosp_id,sethosp_id]=useState("initial");
    const [hospitalDetails, setHospitalDetails] = useState(hospinfo);

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
            // console.log(json);
    }
    const addhospital=async(name,city,state,pincode,country,email,license_number,contact_no,emergency_con,director_name,address)=>{
        const url=`${host}/api/donor/newhosp`
        const response=await fetch(url,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({name,city,state,pincode,country,email,license_number,contact_no,emergency_con,director_name,address})
        });
        if (response.status !== 200) {
            toast.error("Failed to add hospital. Please try again.");
            return;
        }
        if(response.ok){
            toast.success("Hospital Registered Successfully");
        }
        const json=await response.json();
         console.log(json);
        // console.log(name,city)
        // setdata([...data,json])
    }
    const selectdonor=async(email)=>{
        const url=`${host}/api/donor/selectdonor`
        const response=await fetch (url,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",

            },
            body:JSON.stringify({email})
        });
        if(response.status==200){
            alert("An email has been sent to your mail id please check it");
        }
        const json=await response.json();
       
    }
    const gethospinfo=async(hospitalId)=>{
      const url=`${host}/api/donor/getHospitalInfo`
      const response=await fetch(url,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",

        },
        body:JSON.stringify({hospitalId})
      });
      const json=await response.json();
    //   console.log(json)
      setHospitalDetails(json); // Save to state
    //   console.log(hospitalDetails)
      localStorage.setItem("hospinfodata",hospitalDetails)
    }
    
   
    
    
  return (
    <DonorContext.Provider value={{getalldata,data,hosp_id,sethosp_id,addpatient,addhospital,selectdonor,gethospinfo,hospitalDetails}}>
        {props.children}
    </DonorContext.Provider>
  )
};

export default DonorState;
