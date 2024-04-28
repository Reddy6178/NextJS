function getRandomInteger( count : number){
    return Math.floor(Math.random() *count)
}

export default function ProductDetailsLayout({children,} : {children : React.ReactNode}){

    const random= getRandomInteger(1000);
    if(random ===1){
        throw new Error("Error Loading Product");
    }
    return(
        <>
            <header>
                <p>Product Details Header</p>
            </header>
            {children}
            <h2>Featured Products</h2>
        </>
    )
}