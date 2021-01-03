import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import axios from 'axios';
import {multiClientMiddleware} from 'redux-axios-middleware'
import {BASE_URL} from './config'

const clients = {
    default: {
        client: axios.create({
            baseURL: `${BASE_URL}`,
            responseType: 'json',
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
}

const store = createStore(rootReducer, applyMiddleware(
    multiClientMiddleware(clients)
))

export default store
