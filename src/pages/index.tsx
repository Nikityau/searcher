import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Main from "./main";
import Auth from "./auth/auth";
import Base from "./base";

const AppPages = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Base/>}>
                <Route path={'/main'} element={<Main/>} />
                <Route path={'/auth'} element={<Auth/>}/>
                <Route path={'/upload-file'} element={'ok'}/>
                <Route path={'/admin-info'} element={'admin'}/>

                <Route path={'/'} element={<Navigate to={'main'}/>}/>
            </Route>
        </Routes>
    );
};

export default AppPages;