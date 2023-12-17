

export default function ReviewId({
    params
}:{
    params : {
    productId : string,
    reviewId : string}
}){
    if(parseInt(params.reviewId) > 1000){
        return (
            <h1>
                Page Not Found
            </h1>
        )
    }
    return(
        <h1> Review Id {params.reviewId} for Product Id {params.productId}</h1>
    )
}