import Axios from "../utility/interceptor";

const getAll = (url) => {
    const request = Axios.get(url)
    return request.then(response => response.data)
}

const update = (url, body) => {
    const request = Axios.post(url, body);
    return request.then(response => response.data);
}
export default { getAll, update }