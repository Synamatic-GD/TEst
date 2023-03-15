import * as Actions from './actions';
import initialState from '../store/initialState';

const MoviesReducer = (state = initialState.movies, action) => {
    switch (action.type) {
        case Actions.FETCH_MOVIES:
            return {
                ...state,
                results: action.payload.movies.results
            };
        default:
            return state;
    }
};

export default MoviesReducer;