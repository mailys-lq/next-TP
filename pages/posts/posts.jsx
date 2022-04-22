import React, { useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/router';


const posts = () => {
    const [posts, setPostsData] = useState(); 
    const router = useRouter();
    
    const getPosts = async () => {
        const result = await axios.get('/api/posts/getPosts')
        console.log(result.data.posts)
        setPostsData(result.data.posts)
    }

    useEffect(() => {
        getPosts()
    }, [setPostsData])


    const handleClick = (id) => {
        router.push(`/posts/showpost/${id}`)
    }
    

    return (
        
        <div>
            
            <Link href="/">
                <a><h1>Home</h1></a>
            </Link>
            {posts?.map((post, i) => (
                    <div key={post._id}>
                        <h2>Titre : {post.title}</h2>
                        <p>Description :</p>
                        <p>{post.description}</p>
                        {/* <p>Par : {post.author}</p> */}
                        {/* <p>Posté le : {post.date.slice(0, 10)}</p> */}
                        <button onClick={() => handleClick(post.id)}>Voir</button>
                    </div>
                
            ))}
            <h2>Posts</h2>  

        </div>
    );
};

export default posts;