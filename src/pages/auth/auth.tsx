import React, {useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import Button from "../../shared/button";

import './style.scss'

const Auth = () => {

    const {
        hash
    } = useLocation()

    const isLogin = hash.includes('login')
    const isReg = hash.includes('reg');

    const dispatch = useDispatch();
    const nav = useNavigate()

    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    const auth = () => {
        dispatch({
            type: 'user/login',
            payload: {
                username: login,
                role: login === 'admin' ? 'admin' : 'user',
            }
        })
        nav('/searcher/main')
    }

    const likeGuest = () => {
        nav('/searcher/main')
    }

    const changeType = () => {
        nav(`#${isLogin ? 'reg' : 'login'}`)
    }

    return (
        <div className={'auth-page'}>
            <div className={'auth-page__form'}>
                {
                    isReg &&
                    <input placeholder={'fio'}/>
                }
                <input placeholder={'login'} onChange={({target: {value}}) => setLogin(value)}/>
                <input placeholder={'password'} type={'password'} onChange={({target: {value}}) => setPassword(value)}/>
                <Button
                    text={isLogin ? 'войти' : 'зарегистрироваться'}
                    onClick={auth}
                />
                <Button
                    text={isLogin ? 'Смена на регистрацию' : 'Смена на авторизацию'}
                    onClick={changeType}
                />
                <Button
                    text={'войти как гость'}
                    onClick={likeGuest}
                />
            </div>
        </div>
    );
};

export default Auth;