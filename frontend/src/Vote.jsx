import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Vote.css'
import Navbar from './Navbar'
import { postVote, getAllPolicies, getPolicy } from '../api/api';
import { useParams } from 'react-router-dom';

function Vote() {
    const { uuid } = useParams();
    
    const [policy, setPolicy] = new useState([]);

    async function handleGetPolicy () {
        return(await getPolicy(uuid));
    }
    
    useEffect(() => {
        async function init() {
            await handleGetPolicy().then(response => {
                setPolicy(response)
                console.log(response)
            })
        }
        init();
    }, [])

    
    async function handlePostVote(vote) {
        await postVote(vote, uuid).then(alert("Vote submitted!"));
    }

    return (
        <>
            <div className='main-vote-container'>
                <Navbar />
                <div className='container2'>
                    <h1>
                            Rate a policy 
                    </h1>
                    <div className='v'>
                        <div className='v5'>

                            <div className='v2'>
                            <div className='voteuser'>
                                {policy.user}
                            </div>
                            
                            <div className='votetitle'>
                                {policy.title}
                            </div>
                            
                            <div className='votedescription'>
                                {policy.description}
                            </div>
                            
                                <div className='vbuttoncontainer'>
                                    <button className='vbutton green' onClick={() => handlePostVote(true)}>Upvote ({policy.good})</button>
                                    <button className='vbutton red' onClick={() => handlePostVote(false)}>Downvote({policy.bad})</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )   
}

export default Vote
