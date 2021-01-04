export const FETCH_RESTAURANTS = 'FETCH_RESTAURANTS'

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
