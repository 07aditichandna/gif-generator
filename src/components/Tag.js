
import {useState,useEffect} from 'react'
import axios from 'axios';
import Spinner from './Spinner'

function Tag()
{

    const[gif,setGif]=useState("cat");
    const[gifurl,setGifurl]=useState('');
    const[index,setIndex]=useState(0);
    const[loading,setLoading]=useState(false);

  const api_key=process.env.REACT_APP_KLIPY_API_KEY;

  async function fetchdata()
  {
    setLoading(true);
    const url=`https://api.klipy.com/api/v1/${api_key}/gifs/search?page=${1}&per_page=${20}&q=${gif}`;
    const result=await axios.get(url);
    const output=result.data.data.data;
     let random_index=(Math.floor(Math.random()*20));
    setGifurl(output[random_index].file.hd.gif.url);
    setLoading(false);
      // output[index].file.hd.mp4.url;
    
   
  
    
  }
  
  useEffect(()=>{
            fetchdata();
  },[]);
  
   
    function clickHandler()
    {
              fetchdata();

    }
    function changeHandler(event)
    {
        setGif(event.target.value);
              
    }
    return(
        <div>
            <h2 className='g-head2'>A RANDOM {gif} GIF</h2>
            <div className='ran1'>
                {
                   loading?<Spinner/>:  <img src={gifurl}className="g-img1"></img>
                }
              
                <input type='text' onChange={changeHandler} className='g-input'></input>
            <button className="g-btn2" onClick={clickHandler}>Generate GIF</button>
            </div>
          

        </div>
    )
}

export default Tag