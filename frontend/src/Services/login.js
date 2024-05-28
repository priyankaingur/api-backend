import axios from 'axios'
import UrlEndpoints from "../utility/UrlEndpoints.js";

const login = (credentials) => {
    const request = axios.post(UrlEndpoints.LOGIN, credentials)
    return request.then(response => response.data)
}

export default { login }