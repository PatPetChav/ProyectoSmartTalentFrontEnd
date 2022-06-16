import axios from 'axios'
import { URL_BACKEND } from '../environments/environments'

export const getTest = async () => {
    const test = await axios.get(URL_BACKEND + "/test/")
    return test.data;
}