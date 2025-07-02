import type {FC, JSX} from "react";
import {Route, Routes} from "react-router-dom";
import {Main} from "../pages/main";
import {Home} from "../pages/home";

export const RoutesComponent:FC = ():JSX.Element => {

    return(
        <Routes>
            <Route path="/" element={<Main/>}>
                  <Route path="/" element={<Home/>} />
            </Route>
        </Routes>
    )
}