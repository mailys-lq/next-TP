import React from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useState } from 'react';
import Cookies from 'js-cookie'

const register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    
    async function register() {
        const result = await axios.post(
            "/api/user/registerUser",
            {
              email: email,
              password: password,
            },
        );
        Cookies.set("token", result.data.token);
    

        console.log(result);
    }
   
    
    return (
        <div>
            
            <Link href="/">
                <a><h1>Home</h1></a>
            </Link>
            <form action="post">
                <label htmlFor="name-input-register">Name</label><br/>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} id='name-input-register'/><br/>
                <label htmlFor="email-input-register">Email</label><br/>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} id='email-input-register'/><br/>
                <label htmlFor="password-input-register">Mot de passe</label><br/>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id='password-input-register'/><br/>

                <button type="button" onClick={() => register()}>Inscription</button>
            </form>
        </div>
    );
};

export default register;