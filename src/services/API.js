import axios from "axios"

const API=axios.create({baseURL:https://bloodbank-zi0j.onrender.com})

API.interceptors.request.use((req)=>{
if(localStorage.getItem("token")){
    req.headers.Authorization=`Bearer ${localStorage.getItem("token")}`;

}
return req;
})

export default API;
