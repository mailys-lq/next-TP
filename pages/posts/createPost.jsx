import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'; 


const createPost = () => {
    
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    
    async function create() {
    
        const result = await axios.post(
            "/api/posts/createPost",
            {
              title: title,
              description: description,
              token: Cookies.get("token")
    
            },
        );
    
        console.log(result);
    }

    return (
        <div>
            <form action="post">
                <label htmlFor="title-input-register">Titre</label><br/>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} id='title-input-register'/><br/>
                <label htmlFor="description-input-register">Description</label><br/>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} id='description-input-register'/><br/>

                <button type="button" onClick={() => create()}>Créer</button>
            </form>
        </div>
    );
};

export default createPost;