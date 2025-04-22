import React,{useState,useEffect} from "react";
import '../style_Search.css'

export const SearchBar=()=>
{
    const [products,setProducts] = useState([]);
    const [input,setINput] = useState('');
    const [cache,setCache] = useState({});
    const [selectedIndex,setSelectedIndex] = useState(-1);


    const url = 'https://dummyjson.com/recipes/search?q='


    const fetchData = async()=>
    {
        

        if(cache[input])
        {
            console.log('Getting from Cache for ',input)
            setProducts(cache[input]);
        }
        else{
            console.log('Fetching For: ',input)
        const respo = await fetch(`${url}${input}`);
        const data = await respo.json();

        setProducts(data?.recipes);
        setCache((pre)=>({...pre,[input]:data.recipes}))

        }

        


    }
    useEffect(()=>
      {
        const timer = setTimeout(()=>fetchData(),300)

        return()=> clearTimeout(timer)
        
        },[input])


const handleKeyDown=(e)=>
{
  
    if(e.key=='ArrowDown')
    {
        setSelectedIndex((pre)=>Math.min(pre+1,products.length-1))

    }
    else if(e.key=='ArrowUp')
    {
        setSelectedIndex((pre)=>Math.max(pre-1,0))
    }
    else if (e.key=='Enter')
        {
            setINput(products[selectedIndex].name)

    }
    {

    }
}

    
    return(
        <div style={{display:'flex', alignItems:"center", justifyContent:'center',flexDirection:'column'}}>
            <div className="search_Container">
            <h3 >Search Bar with Auto Fill</h3>

            <div className="search_Input">
                <input placeholder="Search..." value={input} onChange={(e)=>{setINput(e.target.value)}} onKeyDown={handleKeyDown}/>

            </div>

            <div>
              
               {input.length>1 &&  <div className="output_Container">{products?.map((pd,index)=><p style={{backgroundColor:selectedIndex===index?'#D3D3D3':'white'}} onClick={()=>setINput(pd.name)}>{pd.name}</p>)}
               </div>}
            </div>

            </div>
        </div>
    )
}