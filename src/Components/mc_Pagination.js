import React, { useState,useEffect } from "react";
import {Product_Card} from "./product_Card";


export const MC_Pagination=()=>
{

    const url = 'https://dummyjson.com/products?limit=500';
    const [products,setProducts] = useState([]);
    const productsPerPage = 10;
    const [currentPage,setCurrentpage] = useState(0)

  


    const fetchData = async () => {
        const respo = await fetch(url);
        const data = await respo.json();
        setProducts(data.products);
    
      
      };
      

    
  

   useEffect(()=>{ fetchData();
    

    
   },[])

   const totalPages =  Math.ceil(products.length/productsPerPage)

   const start = currentPage* productsPerPage
      const end = start+productsPerPage

   const handleCLick=(n)=>
   {
    setCurrentpage(n)
   }
   
   const handleBackword=(n)=>
   {
    if(currentPage>0)
    {
        setCurrentpage(pre=>pre-1)
    }

   }
   const handleForward=(n)=>
   {
    if(currentPage<totalPages-1)
    {
        setCurrentpage(pre=>pre+1)
    }

   }

    return(
        <div>
            <h3>PAGINATION</h3>

            <div className="pagination_Button">
              <span className="backword" onClick={handleBackword}>{'<'}</span> { [...Array(totalPages).keys()].map((n)=><button disabled={currentPage===n} onClick={()=>handleCLick(n)}  >{n+1}</button>)}
              <span className="forward" onClick={handleForward}>{'>'}</span>

            </div>

          <div style={{display:"flex", flexWrap:"wrap"}}>{products.slice(start,end).map((product)=><Product_Card product  = {product}/>)}</div>  


        </div>
    )
}