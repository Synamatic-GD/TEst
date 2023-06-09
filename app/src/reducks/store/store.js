import { legacy_createStore as reduxCreateStore, combineReducers, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import MoviesReducer from '../movies/reducers';
import { FavourotesReducer } from '../favourites/reducers';


export default function createStore(history) {
    return reduxCreateStore(
        combineReducers({
            router: connectRouter(history),
            movies: MoviesReducer,
            favourites: FavourotesReducer
        }),
        compose(
            applyMiddleware(routerMiddleware(history)),
            // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );
}
