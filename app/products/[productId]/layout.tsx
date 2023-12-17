export default function ProductDetailsLayout({children,} : {children : React.ReactNode}){
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