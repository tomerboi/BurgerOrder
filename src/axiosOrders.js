import axios from 'axios'

const instance = axios.create(
    {baseURL : 'https://burgerbuilder-9a61a.firebaseio.com/'}
)

export default instance;