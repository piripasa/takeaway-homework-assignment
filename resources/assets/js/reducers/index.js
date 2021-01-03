import {combineReducers} from 'redux'
import LoaderReducer from "./LoaderReducer";

const rootReducer = combineReducers({
    loaderReducer: LoaderReducer,
});

export default rootReducer
