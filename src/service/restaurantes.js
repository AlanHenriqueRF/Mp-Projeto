import axios from "axios";
import BASE_URL from "./base_url";

function loginrestaurante(body){
    const promise = axios.post(BASE_URL+'loginRestaurante',body)
    return promise
}

function cadastraRestaurante(body){
    const promise = axios.post(BASE_URL+'/restaurante',body)
    return promise
}

function pegaTodosRestaurantes() {
    const promise = axios.get(BASE_URL+'/restaurante')
    return promise
}



async function pegarNomeRestaurante(id){
    const promise = await axios.get(`${BASE_URL}/restaurante/${id}`)
    const nome = promise.data
    return nome

}

const ApiRestaurantes = {pegaTodosRestaurantes,pegarNomeRestaurante, cadastraRestaurante, loginrestaurante}
export default ApiRestaurantes