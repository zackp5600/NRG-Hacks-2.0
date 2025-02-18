import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './VoteList.css'
import Navbar from './Navbar'
import { postPolicy, getAllPolicies } from '../api/api';

function VoteList() {
    async function handleGetAllPolicies() {
        const policies = await getAllPolicies();
        console.log(policies);
        return policies
    }
    
    const policies = new useState({})

    useEffect(() => {
        policies = handleGetAllPolicies()
    }, [])

    return (
        <>
            <div className='VoteList_main-container'>
                <Navbar />
                <div className='post-generation-container'>
                    <h1>
                        Trending Policies
                    </h1>
                    <div>
                        <div className='cards'>
                            {objects.map((object, i) => 
                                <div className='card' key={i}>

                                </div>
                            )}
                        </div>
                    </div>    
                </div>
            </div>
        </>
    )   
}

export default VoteList
