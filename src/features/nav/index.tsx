import React from 'react';
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

import './style.scss'

const Nav = () => {

    const user = useSelector(state => state['user'])
    const isAuth = user.data !== null;

    const isAdmin = user.data?.['role'] === 'admin';

    return (
        <>
            {
                isAuth &&
                <div className={'nav'}>
                    <NavLink to={'/searcher/main'} className={({isActive}) =>  (isActive && 'nav__link_current') || ''}>
                        Главная
                    </NavLink>
                    <NavLink to={'/searcher/upload-file'} className={({isActive}) => (isActive && 'nav__link_current') || ''}>
                        Загрузить файл
                    </NavLink>
                    <NavLink to={'/searcher/my-files'} className={({isActive}) => (isActive && 'nav__link_current') || ''}>
                        Мои файлы
                    </NavLink>
                    {
                        isAdmin &&
                        <NavLink to={'/searcher/admin-info'} className={({isActive}) => (isActive && 'nav__link_current') || ''}>
                            Статус системы
                        </NavLink>
                    }
                </div>
            }
        </>
    )
};

export default Nav;