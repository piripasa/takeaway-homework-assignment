import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers'
import axios from 'axios';
import {multiClientMiddleware} from 'redux-axios-middleware'
import {BASE_URL} from './config'
import {loadFavoriteFromLocalStorage} from "./actions/RestaurantAction";
import {loadFavourites, saveFavourites} from "./lib/localStorage";

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

store.dispatch(loadFavoriteFromLocalStorage(loadFavourites()))

store.subscribe(() => {
    saveFavourites(store.getState().restaurantReducer.favorites)
})

export default store
