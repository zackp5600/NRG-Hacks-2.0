import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export async function getTest(){  
    try {
        const response = await axios.get(`${API_URL}/test`);
        console.log(response);
        return response.data
    } catch (error) {
        console.error(error);
    }
}

export async function getAllPolicies(){  
    try {
        const response = await axios.get(`${API_URL}/getAllPolicies`);
        console.log(response);
        return response.data.msg
    } catch (error) {
        console.error(error);
    }
}

export async function postPolicy(title, description){  
    axios.post(`${API_URL}/postPolicy`, {
        policy: {
            user: "Anonymous",
            title: title,
            description: description
        }
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}
