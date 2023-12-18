"use client";
import { useRouter } from "next/navigation";

export default function OrderProduct (){
    const router = useRouter();
    const clickHandler = ()=>{
        console.log("placing your Order");
        router.forward();
    }
    return(
        <>
            <h1>Order Product</h1>
            <button onClick={clickHandler}> Place Order</button>
        </>
    )
}