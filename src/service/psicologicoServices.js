import axios from 'axios'
import { URL_BACKEND } from '../environments/environments'

export const getPsicologico = async () => {
    const psicologico = await axios.get(URL_BACKEND + "/form-psicologico/")
    return psicologico.data;
}

export const postPsicologico = async (psicologico) => {
    console.log(psicologico)

    const psicologicos = await axios.post(
    URL_BACKEND + "/form-psicologico/",
    JSON.stringify(psicologico),
    {
        headers: {
            'Content-type': 'application/json'
        }
    })
    console.log(psicologicos)
    // return psicologicos.data;
}