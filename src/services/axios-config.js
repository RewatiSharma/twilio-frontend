import axios from 'axios';

// let baseURL = "http://localhost:3001";
let baseURL = "https://twilio-sms-hv3x.onrender.com";

const publicReq = axios.create({ 
    baseURL 
});

export { publicReq};
