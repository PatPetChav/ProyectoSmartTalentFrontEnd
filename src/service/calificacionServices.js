import axios from 'axios'
import { URL_BACKEND } from '../environments/environments'

export const getCalificacion = async () => {
    const calificacion = await axios.get(URL_BACKEND + "/calificacion/")
    return calificacion.data;
}

export const getCalificacionDash = async (notaMinima) => {
    const calificacion = await axios.get(URL_BACKEND + "/dashboard/" + notaMinima)
    return calificacion.data;
}

export const postCalificacion = async (calificacion) => {
    console.log(calificacion)

    const calificaciones = await axios.post(
    URL_BACKEND + "/calificacion/",
    JSON.stringify(calificacion),
    {
        headers: {
            'Content-type': 'application/json'
        }
    })
    console.log(calificaciones)
    // return calificaciones.data;
}