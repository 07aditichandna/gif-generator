

import Random from "./components/Random"
import Tag from './components/Tag'



function Random_gif()
{
    return(
        <div className="container2">
          
          <div className="g-head1">
            <h1>RANDOM GIF GENERATOR</h1>
          </div>
       
       <div className="gif-div">
         <div className="random">
            <Random/>
          </div>

          <div className="tag" >
              <Tag/>
          </div>
        

       </div>
         

        </div>

    )
}

export default Random_gif