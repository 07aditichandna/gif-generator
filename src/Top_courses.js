import { useState } from 'react';

import NavBar from './components/NavBar'
import Filter from './components/Filter'
import Cards from './components/Cards'
import {filterData,apiurl} from './data.js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useEffect} from 'react'
import Spinner from './components/Spinner'
   

function Top_courses()
{
    const[courses,setCourses]=useState(null)   
        const [loading,setLoading]=useState(true)
        const[category,setCategory]=useState(filterData[0].title);
       
       
       

          useEffect(()=>
        {
           
            async function response()
            {
                try{
                   const res=await fetch(apiurl);// fetching the data
                   const output=await res.json();// converting it into json format
                   setCourses(output.data)  
                }
                catch(error)
                {
                    toast.error("Network Porblem");
                }
                setLoading(false)
                
            }
            response();

        },[])

  return(
    <div className='container'>
    <NavBar/>

    <Filter
    filterData={filterData}
     category={category} 
     setCategory={setCategory}
    ></Filter>


     {
      loading?<Spinner/>: <Cards courses={courses} category={category} />
     }
       
    </div>
  )
}
export default Top_courses;