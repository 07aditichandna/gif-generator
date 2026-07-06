import { FcLike,FcLikePlaceholder} from "react-icons/fc";
import {useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card=({course,likedcourses,setLikedCourses})=>

{

    const[readMore,setRead]=useState(false)
   const desc = readMore
  ? course.description
  : course.description.substring(0, 150);


  let liked=likedcourses;
  let setLiked=setLikedCourses;

   
    
     function readHandler()
     {
        setRead(!readMore)
     }

     function likeHandler()
     {
       if(liked.includes(course.id))// that means course is already liked and we have to remove it
       {
             setLiked((prev)=>prev.filter((cid)=>(cid!==course.id)));
             toast.warning("Unliked Successfully!!")
       }
       else // we have to add it in liked array
       {
              if(liked.length===0)// no course is liked yet
              setLiked([course.id])
              else
                setLiked((prev)=>([...prev,course.id]));

               toast.success("Liked Successfully!!")
       }
      
        
     }


    return(
        <div className="card">
            <div className="single-card">
                 <div className="pic">
            <img src={course.image.url} alt={course.image.alt} height="250px" width="420px" border-radius="3px" ></img>  
        </div>

         <div className="icon" onClick={likeHandler}>
           
              {likedcourses.includes(course.id)?<FcLike size="2rem" className="ic"/>:<FcLikePlaceholder size="2rem" className="ic"/>}
                 

            </div> 

        <div className="theory">
                <h3 className="head2" >{course.title}</h3>

                  <p className="des">
                    {desc}
                    <span  onClick={readHandler} className="btn-3">{readMore?`...Show less`:`...Show more`}</span>
                  </p>
                
            </div>

            </div>

       


        </div>
       
    )

}

export default Card

