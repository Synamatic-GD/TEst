import { createSelector } from 'reselect';

const moviesSelector = state => state.movies;

const getMovies = createSelector([moviesSelector], state => state);

export default getMovies;