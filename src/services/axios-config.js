import axios from 'axios';

let baseURL = "http://localhost:3001";

const publicReq = axios.create({ 
    baseURL 
});

export { publicReq};
