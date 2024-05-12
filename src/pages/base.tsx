import React from 'react';
import {Outlet} from "react-router-dom";
import Nav from "../features/nav";

const Base = () => {
    return (
        <>
            <Nav/>
            <Outlet/>
        </>
    );
};

export default Base;