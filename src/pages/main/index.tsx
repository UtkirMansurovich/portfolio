import type {FC, JSX} from "react";
import {Navbar} from "../../layouts/navbar";
import {Outlet} from "react-router-dom";

export const Main:FC = ():JSX.Element => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    )
}