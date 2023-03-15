import { createSelector } from 'reselect';

const favouritesSelector = state => state.favourites;

const getFavourites = createSelector([favouritesSelector], state => state.list);

export default getFavourites;