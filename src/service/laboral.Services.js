import axios from 'axios'
import { URL_BACKEND } from '../environments/environments'

export const getLaboral = async () => {
    const laboral = await axios.get(URL_BACKEND + "/form-laboral/")
    return laboral.data;
}

export const postLaboral = async (laboral) => {
    console.log(laboral)

    const laborales = await axios.post(
    URL_BACKEND + "/form-laboral/",
    JSON.stringify(laboral),
    {
        headers: {
            'Content-type': 'application/json'
        }
    })
    console.log(laborales)
    // return laborales.data;
}