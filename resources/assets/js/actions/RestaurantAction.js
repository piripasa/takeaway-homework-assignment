export const FETCH_RESTAURANTS = 'FETCH_RESTAURANTS'
export const ADD_FAVORITE_RESTAURANT = 'ADD_FAVORITE_RESTAURANT'
export const LOAD_FAVOURITE_FROM_LOCAL_STORAGE = 'LOAD_FAVOURITE_FROM_LOCAL_STORAGE'

export const fetchRestaurants = (query) => {
    return {
        type: FETCH_RESTAURANTS,
        payload: {
            request: {
                method: 'get',
                url: `restaurants?${query}`
            }
        }
    }
}

export const addFavoriteRestaurant =  (data) => {
    return {
        type: ADD_FAVORITE_RESTAURANT,
        payload: {
            name: data.name
        }
    }
};

export const loadFavoriteFromLocalStorage = (data) => {
    return {
        type: LOAD_FAVOURITE_FROM_LOCAL_STORAGE,
        payload: {
            data
        }
    }
}
