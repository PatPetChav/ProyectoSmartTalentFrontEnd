import axios from 'axios'
import { URL_BACKEND } from '../environments/environments'

export const getPostulante = async () => {
    const postulantes = await axios.get(URL_BACKEND + "/form-postulante/")
    return postulantes.data;
}

export const postPostulante = async (postulante) => {
    console.log(postulante)

    const postulantes = await axios.post(
    URL_BACKEND + "/form-postulante/",
    JSON.stringify(postulante),
    {
        headers: {
            'Content-type': 'application/json'
        }
    })
    console.log(postulantes)
    return postulantes.data;
}