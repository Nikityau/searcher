import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Main from "./main";
import Auth from "./auth/auth";
import Base from "./base";
import MyFiles from "./my-files";
import UploadFile from "./upload-file";
import Admin from "../features/admin";

const AppPages = () => {
    return (
        <Routes>
            <Route path={'/searcher'} element={<Base/>}>
                <Route path={'main'} element={<Main/>} />
                <Route path={'auth'} element={<Auth/>}/>
                <Route path={'upload-file'} element={<UploadFile/>}/>
                <Route path={'my-files'} element={<MyFiles/>}/>
                <Route path={'admin-info'} element={<Admin/>}/>

                <Route path={''} element={<Navigate to={'main'}/>}/>
            </Route>
            <Route path={'/'} element={<Navigate to={'/searcher'}/>}/>
        </Routes>
    );
};

export default AppPages;