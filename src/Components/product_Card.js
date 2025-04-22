import React from "react";
import '../App.css'

export  const Product_Card =({product})=>
{
return(
    <div style={{display:"flex"}}>
         <div className="product_Container">

<img className="images" src={product.images[0]} alt={product.title}></img>
{product.title}


</div>
</div>
)

   
   

}