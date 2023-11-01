import axios from 'axios';

// to create genaral base URL
export default axios.create({
    baseURL:'http://localhost:8080'
})
