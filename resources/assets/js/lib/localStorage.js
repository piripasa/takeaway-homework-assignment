export const saveFavourites = (favourites) => {
    try {
        localStorage.setItem('favourites', JSON.stringify(favourites));
    } catch (err) {
        // Ignore write errors.
    }
};

export const loadFavourites = () => {
    try {
        const serializedState = localStorage.getItem('favourites');
        if (serializedState === null) {
            return [];
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return [];
    }
};
