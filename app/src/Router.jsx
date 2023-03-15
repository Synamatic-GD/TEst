import React from "react";
import { Route,Routes } from 'react-router';
import Home from './containers/Home';
import Category from './containers/Category'
import Favourites from './containers/Favourites';
import Search from './containers/Search';

const Router = () => {
    return (
        <>
            <Routes>
                <Route  path={'/'} element={<Home />} />
                <Route  path={'/category'} element={<Category/>} />
                <Route  path={'/favourites'} element={<Favourites/>} />
                <Route  path={'/search'} element={<Search/>} />
            </Routes>
        </>
    )
};

export default Router;