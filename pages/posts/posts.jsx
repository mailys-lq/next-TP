import React, { useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie'


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
        router.push(`/posts/${id}`)
    }

    const deletePost = async (id) => {
        const result = await axios.delete('/api/posts/deletePost', {id:id})
    }
    
    const logout = async () => {
        Cookies.remove("token"); 
        router.push(`/`)

    }

    return (
        
        <div>
            
            <Link href="/">
                <a><h1>Home</h1></a>
            </Link>
            <button onClick={() => logout()}>Déconnexion</button>

            <Link href="/posts/createPost">
                <a>Create post </a>
            </Link>
            {posts?.map((post, i) => (
                    <div key={post._id}>
                        <h2>Titre : {post.title}</h2>
                        <p>Description :</p>
                        <p>{post.description}</p>
                        <p>Posté le : {post.createdAt.slice(0, 10)}</p>
                        <button onClick={() => handleClick(post.id)}>Voir</button>
                        <button onClick={() => deletePost(post.id)}>Supprimer</button>
                    </div>
                
            ))}
        </div>
    );
};

export default posts;