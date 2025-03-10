import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './SuggestPolicy.css'
import Navbar from './Navbar'
import { getTest, postPolicy, getAllPolicies } from '../api/api';

function SuggestPolicy() {

    async function handlePostPolicy(formData) {
        await postPolicy(formData.get("title"), formData.get("description"))
    }


    return (
        <>
            <div className='main-suggest-container'>
                <Navbar />
                <div className='post-generation-container'>
                    <h1>
                        Suggest a policy 
                    </h1>
                    <div>
                        <form action={handlePostPolicy}>
                            <div className='post-input-main'>
                                <div className='post-input-color'>
                                    <div className='post-input-title'>
                                        <textarea className='sparea' name="title" placeholder='Post title...'/>
                                    </div>
                                    <div className='post-input-description'>
                                        <textarea className='description sparea' name="description" placeholder='Describe your policy...'/>
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

export default SuggestPolicy
