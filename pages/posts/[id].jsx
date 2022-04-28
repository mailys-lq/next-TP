import React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const showPost = () => {

    const [post, setPostData] = useState();
    const router = useRouter();
    const { id } = router.query;
    const [loaded, setLoaded] = useState(false)

    const getPost = async () => {
        if(!id){
            return;
        }
        try{
            const result = await axios.get(`/api/posts/${id}`);
            setPostData(result.data)
            setLoaded(true)
        } catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        getPost()
    }, [id])

    return (
        <div>
            {loaded &&   
            <div key={post.id}>
                
                <h2>Titre : {post.title}</h2>
                <p>Description :</p>
                <p>{post.description}</p>
                {/* <p>Par : {post.author}</p> */}
                {/* <p>Posté le : {post.date.slice(0, 10)}</p> */}
            </div>
            }
            {!loaded && <h1>Loading...</h1>}
        </div>
    );
};

export default showPost;