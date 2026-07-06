

function Filter({filterData,category,setCategory})
{
  
    function categoryHnadler(title)
    {
        setCategory(title)
    }
   
 return (
       <div className="filter-div">
        {
            filterData.map((data)=>
            {
                return <button key={data.id} className="btn"  onClick={()=>categoryHnadler(data.title)} >{data.title}
                
                </button>

            })
        }
       </div>
    )
}

   
export default Filter