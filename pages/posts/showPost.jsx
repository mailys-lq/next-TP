import React from 'react';
import { useState } from 'react';

const showPost = (id) => {

    const [post, setPostData] = useState(); 
    
    const getPost = async () => {
        const router = useRouter()
        const { id } = router.query
        const result = await axios.get('/api/posts/ShowPosts/' +  id)
        
        
        console.log(result)
    }

    useEffect(() => {
        getPost()
    }, [setPostData])

    return (
        <div>
            <div key={post.id}>
                <h2>Titre : {post.title}</h2>
                <p>Description :</p>
                <p>{post.description}</p>
                {/* <p>Par : {post.author}</p> */}
                {/* <p>Posté le : {post.date.slice(0, 10)}</p> */}
            </div>
        </div>
    );
};

export default showPost;