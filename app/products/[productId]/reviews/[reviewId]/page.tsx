"use client";
import { notFound } from "next/navigation";

 function getRandomInteger( count : number){
    return Math.floor(Math.random() *count)
}

export default function ReviewId({
    params
}:{
    params : {
        productId : string,
        reviewId : string
    }
}){
    const random= getRandomInteger(1000);
    if(random ===1){
        throw new Error("Error Loading Review");
    }
    if(parseInt(params.reviewId) > 1000){
       notFound();
    }
    return(
        <h1> Review Id {params.reviewId} for Product Id {params.productId}</h1>
    )
}