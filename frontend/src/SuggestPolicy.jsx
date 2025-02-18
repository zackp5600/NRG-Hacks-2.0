import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './SuggestPolicy.css'
import Navbar from './Navbar'
import { getTest, postPolicy, getAllPolicies } from '../api/api';

function SuggestPolicy() {
  const [count, setCount] = useState(0)

    async function handlePostPolicy(formData) {
        await postPolicy(formData.get("title"), formData.get("description"))
    }

    async function handleGetAllPolicies() {
        const policies = await getAllPolicies();
        console.log(policies);
        return policies
    }
  return (
    <>
    <div>
        <Navbar />
    </div>
    <div>
        <div>
            <form action={handlePostPolicy}>
                <input name="title" />
                <input name="description" />
                <button type="submit">Submit</button>
            </form>
            
            <button onClick={() => handleGetAllPolicies()}>Submit</button>
        </div>
    </div>
    </>
  )
}

export default SuggestPolicy
