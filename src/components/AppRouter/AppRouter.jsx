import React from 'react';
import {routes} from "./index";
import {Route, Routes} from "react-router-dom";

const AppRouter = () => {
    return (
        <Routes>
            {routes.map((route, index) =>
                <Route key={index} element={route.element} path={route.path}/>
            )}
        </Routes>
    );
};

export default AppRouter;