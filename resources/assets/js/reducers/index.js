import {combineReducers} from 'redux'
import LoaderReducer from "./LoaderReducer";
import RestaurantReducer from "./RestaurantReducer";

const rootReducer = combineReducers({
    loaderReducer: LoaderReducer,
    restaurantReducer: RestaurantReducer,
});

export default rootReducer
