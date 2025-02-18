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
    
    const [policies, setPolicies] = new useState([]);

    useEffect(() => {
        async function init() {
            await handleGetAllPolicies().then(response => {
                setPolicies(response)
                console.log(response)
            })
            
        }
        init();
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
                        <div className='votecards'>                       
                            {policies.map((policy, i) => 
                                <div className={i % 2 > 0 ? 'grey' : 'votecard'} key={i}>
                                    <div>
                                        <div className='voteuser'>
                                            {policies[i].user}
                                        </div>
                                        
                                        <div className='votetitle'>
                                            {policies[i].title}
                                        </div>
                                        
                                        <div className='votedescription'>
                                            {policies[i].description}
                                        </div>

                                        <div className='votebutton'>
                                            <button className={i % 2 > 0 ? 'whitebtn' : 'greybtn'}>
                                                View policy
                                            </button>
                                        </div>

                                    </div>
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
