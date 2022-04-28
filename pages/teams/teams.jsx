import React, { useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie'


const teams = () => {

    const [teams, setTeamData] = useState(); 
    const router = useRouter();
    
    const getTeams = async () => {
        const result = await axios.get('/api/teams/getTeams')
        console.log(result.data.teams)
        setTeamData(result.data.teams)
    }
    useEffect(() => {
        getTeams(); 
        
        if(!Cookies.get('token')) {
            router.push('/')
        }
    }, [setTeamData])


    const handleClick = (id) => {
        router.push(`/teams/${id}`)
    }

    const deleteTeam = async (id) => {
        const result = await axios.delete('/api/teams/deleteTeam', {id:id})
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
                <a>Créer une team </a>
            </Link>

            <Link href="/teams/teams">
                <a>Lister les teams </a>
            </Link>
            {teams?.map((post, i) => (
                    <div key={post._id}>
                        <h2>Nom de la team : {post.name}</h2>
                        <p>{teams.members}</p>
                        <p>Créé le : {team.createdAt.slice(0, 10)}</p>
                        {/* <button onClick={() => handleClick(team.id)}></button> */}
                        <button onClick={() => deleteTeam(team.id)}>Supprimer</button>
                    </div>
                
            ))}
        </div>
    );
};

export default teams;