import React from 'react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'
// import { useUserContext } from "../../context/UserContext";

import { useRouter } from 'next/router'
const login = () => {

    // const {setUser} = useUserContext();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter()


    async function logInFetchRequest() {

        const result = await axios.post(
            "/api/user/loginUser",
            {
              email: email,
              password: password,
            },
        );
        Cookies.set("token", result.data.token);
        console.log(result.status);
        // setUser(result.data.user);

        if(result.status === 200) {
            router.push('/posts/posts')
        }

    }

    return (
        <div>
            <Link href="/">
                <a><h1>Home</h1></a>
            </Link>
            <form action="post">
                <label htmlFor="email-input-login">Email</label><br/>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} id='email-input-login'/><br/>
                <label htmlFor="password-input-login">Mot de passe</label><br/>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id='password-input-login'/><br/>

                <button type="button" onClick={() => logInFetchRequest()}>Connexion</button>
            </form>
        </div>
    );
};

export default login;