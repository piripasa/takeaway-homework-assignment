import {
    ADD_FAVORITE_RESTAURANT,
    FETCH_RESTAURANTS,
    LOAD_FAVOURITE_FROM_LOCAL_STORAGE,
} from "../actions/RestaurantAction"

const INITIAL_STATE = {
    restaurants: [],
    pagination: {},
    favorites: []
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case `${FETCH_RESTAURANTS}_SUCCESS`:
            return {
                ...state,
                restaurants: action.payload.data.data.paginate.current_page === 1 ? action.payload.data.data.restaurants : state.restaurants.concat(action.payload.data.data.restaurants),
                pagination: action.payload.data.data.paginate
            }
        case ADD_FAVORITE_RESTAURANT:
            let idAlreadyExists = state.favorites.indexOf(action.payload.name) > -1;
            let favorites = state.favorites.slice();

            if(idAlreadyExists) {
                favorites = favorites.filter(id => id !== action.payload.name);
            }
            else {
                favorites.push(action.payload.name);
            }

            return {
                ...state,
                favorites
            };
        case LOAD_FAVOURITE_FROM_LOCAL_STORAGE:
            return {
                ...state,
                favorites: action.payload.data
            }
        default:
            return state;

    }
}
