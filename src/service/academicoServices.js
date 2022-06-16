import axios from 'axios'
import { URL_BACKEND } from '../environments/environments'

export const getAcademico = async () => {
    const academico = await axios.get(URL_BACKEND + "/form-academico/")
    return academico.data;
}

export const postAcademico = async (academico) => {
    console.log(academico)

    const academicos = await axios.post(
    URL_BACKEND + "/form-academico/",
    JSON.stringify(academico),
    {
        headers: {
            'Content-type': 'application/json'
        }
    })
    console.log(academicos)
    // return academicos.data;
}