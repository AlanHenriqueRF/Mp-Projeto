import axios from "axios";
import BASE_URL from "./base_url";

function pegaTodosRestaurantes() {
    const promise = axios.get(BASE_URL+'/restaurante')
    return promise
}

function selecionarRestaurante(id) {
    const promise = axios.get(`${BASE_URL}/restaurante/${id}`)
    return promise
}

const ApiRestaurantes = {pegaTodosRestaurantes,selecionarRestaurante}
export default ApiRestaurantes