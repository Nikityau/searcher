import React from "react";

import './style/index.scss'

import {BrowserRouter} from "react-router-dom";
import AppPages from "../pages";
import {Provider} from "react-redux";
import {store} from "../store";

const App = () => {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className={'app'}>
                    <AppPages/>
                </div>
            </BrowserRouter>
        </Provider>
    );
};

export default App;