
import {useEffect, useState,useCallback} from 'react'
import axios from 'axios';
import Spinner from './Spinner'

function Random()
{
  
    const[gifurl,setGifurl]=useState('');
    
    const[loading,setLoading]=useState(false);

  const api_key=process.env.REACT_APP_KLIPY_API_KEY;

  const fetchdata = useCallback(async () => {
  setLoading(true);

  const url = `https://api.klipy.com/api/v1/${api_key}/gifs/search?page=1&per_page=20`;

  const result = await axios.get(url);
  const output = result.data.data.data;

  let random_index = Math.floor(Math.random() * 20);
  setGifurl(output[random_index].file.hd.gif.url);

  setLoading(false);
}, [api_key]);

useEffect(() => {
  fetchdata();
}, [fetchdata]);

function clickHandler() {
  fetchdata();
}




    return(
        <div>
            <h2 className='g-head2'>A RANDOM GIF</h2>
            <div className='ran1'>
                {
                    loading?<Spinner/>:<img src={gifurl} alt="gif" className="g-img1"></img>
                }
                
            <button className="g-btn1" onClick={clickHandler}>Generate GIF</button>
            </div>
          

        </div>
    )
}

export default Random