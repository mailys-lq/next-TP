import Link from 'next/link';

// import { useState } from "react";

export default function Home() {
    // const [data, setData] = useState(); 

    // const getPost = async () => {
    //     const res = await fetch('http://jsonplaceholder.typicode.com/posts')
    //     .then((res) => res.json())
    //     setData(res)
    // }

    // getPost()

    return( 
        <div>
            <Link href="/">
                <a><h1>Home</h1></a>
            </Link>
            <Link href="/auth/login">
                <a>Login</a>
            </Link>
            <Link href="/auth/register">
                <a>Register</a>
            </Link>
        </div>
    )
}