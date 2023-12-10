import axios from "axios";
import BASE_URL from "./base_url";

function pegaTodosRestaurantes() {
    const promise = axios.get(BASE_URL+'/restaurante')
    return promise
}

async function pegarNomeRestaurante(id){
    const promise = await axios.get(`${BASE_URL}/restaurante/${id}`)
    const nome = promise.data
    return nome

}

const ApiRestaurantes = {pegaTodosRestaurantes,pegarNomeRestaurante}
export default ApiRestaurantes