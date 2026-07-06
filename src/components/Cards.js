
import Card from './Card.js'
import {useState} from 'react'


const Cards=({courses,category})=>
{

    const[likedcourses,setLikedCourses]=useState([]);
    

    
    let allcourses=[];
    function getALLCourses()
    {
         if(category==="ALL")
        {
            console.log(courses)
              Object.values(courses).forEach((coursecategory)=>
        coursecategory.forEach((course)=>
        allcourses.push(course))
        )
         return allcourses;
        }
        else
        {
            return (courses[category]);
        }
       
    }
   

    return(
        <div className='cards1'>
        
            {
                      
                     getALLCourses().map((course)=>{
                     return <Card course={course} 
                     key={course.id} 
                     likedcourses={likedcourses}
                      setLikedCourses={setLikedCourses}></Card>
                

                }
               
              
            )
            }
        </div>
    )



    
}

export default Cards