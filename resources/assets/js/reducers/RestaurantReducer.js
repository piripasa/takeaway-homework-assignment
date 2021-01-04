import {FETCH_RESTAURANTS} from "../actions/RestaurantAction"

const INITIAL_STATE = {
    restaurants: [],
    pagination: {},
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case `${FETCH_RESTAURANTS}_SUCCESS`:
            return {
                ...state,
                restaurants: action.payload.data.data.paginate.current_page === 1 ? action.payload.data.data.restaurants : state.restaurants.concat(action.payload.data.data.restaurants),
                pagination: action.payload.data.data.paginate
            }
        default:
            return state;

    }
}
