import Link from "next/link";

export default function Home() {
    return(
        <>
            <Link href="/about">About</Link>
            <Link href="/products"> Products</Link>
            <Link href="/blog"> Blog</Link>
            <h1>Welcome Home</h1>
        </>
    )
}