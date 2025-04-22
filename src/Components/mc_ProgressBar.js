import React, { useEffect, useState } from "react";
import '../style_Progress.css'

export const ProgressBar=({width})=>
{
    const [prog_width,setProgWidth] = useState(0)


    useEffect(()=>
        {const timer = setTimeout(()=>
        setProgWidth(width),300)},[])

const handleDecrease=()=>
{
    if(prog_width>0){
    setProgWidth(pre=>pre-10)
    }

}
const handleIncrease=()=>
{
    if(prog_width<100){setProgWidth(pre=>pre+10)
    }

}

    return(
        <div className="progressBar_Container">
            <h3 style={{color:"white"}}>ProgressBar</h3>
            <div className="bar">
                <div className="bar_Inside" style={{width:`${prog_width}%`}}>
                    <span>{prog_width>0?`${prog_width}%`:''}</span>

                </div>
                

            </div>

            <div className="button_Group">
                    <button disabled={prog_width===100} onClick={handleIncrease}>Increase by 10</button>
                <button disabled={prog_width===0} onClick={handleDecrease}>Decrease by 10</button>
                    </div>

        </div>
    )
}