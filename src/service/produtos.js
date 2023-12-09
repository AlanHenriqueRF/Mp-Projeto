import axios from "axios";
import BASE_URL from "./base_url";

function pegaTodosProdutos(){
    const promise = axios.get(BASE_URL+'/produtos')
    return promise
}

const ApiProdutos = {pegaTodosProdutos}
export default ApiProdutos