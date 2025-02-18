import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Vote.css'
import Navbar from './Navbar'
import { postPolicy, getAllPolicies } from '../api/api';

function Vote() {
    async function handleGetAllPolicies() {
        const policies = await getAllPolicies();
        console.log(policies);
        return policies
    }

    return (
        <>
            <div className='main-suggest-container'>
                <Navbar />
                <div className='post-generation-container'>
                    <h1>
                        Vote
                    </h1>
                    <div>
                        <form>
                            <div className='post-input-main'>
                                <div className='post-input-color'>
                                    <div className='post-input-title'>
                                        <textarea name="title" placeholder='Post title...'/>
                                    </div>
                                    <div className='post-input-description'>
                                        <textarea className='description' name="description" placeholder='Describe your policy...'/>
                                    </div>
                                </div>
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </div>    
                </div>
            </div>
        </>
    )   
}

export default Vote
