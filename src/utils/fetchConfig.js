import axios from 'axios'
const BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL;


async function fetchConfig() {
    try { await axios.get(`${BASE_URL}/config`) }

    catch (err) { return }
}

export default fetchConfig;