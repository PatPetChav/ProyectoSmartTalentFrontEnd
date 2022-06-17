import { URL_BACKEND } from '../environments/environments'
import axios from 'axios'

const guardarToken = (token) => {
    localStorage.setItem('token', token);
    let payload = token.split('.')[1];
    let payloadDecoded = atob(payload);
    let payloadJSON = JSON.parse(payloadDecoded);
    return payloadJSON
}

export const cerrarSesion = ()=>{
    localStorage.removeItem("token")
}

export const estaLogeado = () =>{
    const token = localStorage.getItem("token")
    if (!token) return false
    const payloadJSON = guardarToken(token)
    if(!payloadJSON) return false
    console.log("tokenserv",payloadJSON.exp,Date.now()/1000)
    if(!(payloadJSON.exp>Date.now()/1000)) return false
    return true
}

export const Authentication = async (credencialesUsuario) => {
    
    const usuarioTokens = await axios.post(URL_BACKEND + "/token/",
        JSON.stringify(credencialesUsuario),
        {
            headers: {
                'Content-type': 'application/json'
            }
        })
        
    if (usuarioTokens.status === 200) return guardarToken(usuarioTokens.data.access)
    else return false

}


