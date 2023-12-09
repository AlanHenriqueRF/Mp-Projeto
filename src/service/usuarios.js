import axios from "axios";
import BASE_URL from "./base_url";

function pegaTodosUsers(){
    const promise = axios.get(BASE_URL+'/usuarios')
    return promise
}

function cadastro(body){
    const promise = axios.post(BASE_URL+'/usuarios',body)
    return promise
}
const Apiusuarios = {pegaTodosUsers,cadastro}
export default Apiusuarios