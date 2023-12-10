import axios from "axios";
import BASE_URL from "./base_url";

function pegaTodosUsers(){
    const promise = axios.get(BASE_URL+'/usuario')
    return promise
}

function cadastro(body){
    const promise = axios.post(BASE_URL+'/usuario',body)
    return promise
}

function login(body){
    const promise = axios.post(BASE_URL+'/login',body)
    return promise
}
const Apiusuarios = {pegaTodosUsers,cadastro,login}
export default Apiusuarios