import axios from 'axios'

const Api = axios.create({
    baseURL: 'https://my-json-server.typicode.com/gustavoclay/food/restaurantes',
    baseURL: 'https://my-json-server.typicode.com/gustavoclay/food/pratos?restaurante_id=1',
    baseURL: 'https://my-json-server.typicode.com/gustavoclay/food/bebidas?restaurante_id=1'
})

export default Api