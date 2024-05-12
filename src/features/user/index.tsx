import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Button from "../../shared/button";
import {useNavigate} from "react-router-dom";

import './style.scss'

const User = () => {

    const nav = useNavigate()
    const user = useSelector(state => state['user']);
    const dispatch = useDispatch();

    const isUserLoggedIn = user.data !== null;

    const authPage = (hash: string = 'login') => {
        nav('/auth' + `#${hash}`)
    }

    const logout = () => {
        dispatch({
            type: 'user/logout'
        })
    }

    return (
        <div className={'user-data'}>
            {
                !isUserLoggedIn &&
                <div className={'user-data__buttons'}>
                    <Button
                        text={'Войти'}
                        onClick={() => authPage()}
                    />
                    <Button
                        text={'Зарегистрироваться'}
                        onClick={() => authPage('reg')}
                    />
                </div>
            }
            {
                isUserLoggedIn &&
                <div className={'user-data__user-info'}>
                    <div className={'user-data__data'}>
                        <span>{ user.data['username'] }</span>
                        <span>роль: { user.data['role'] }</span>
                    </div>
                    <Button
                        text={'Выйти'}
                        onClick={logout}
                    />
                </div>
            }
        </div>
    );
};

export default User;