import React from 'react';
import {Tabs} from "antd";
import type { TabsProps } from 'antd';

import './style.scss'

import Graphics from "./ui/graphics";
import UploadHistory from "./ui/upload-history";

const items: TabsProps['items'] = [
    {
        key: '1',
        label: 'Графики загрузки',
        children: <Graphics/>,
    },
    {
        key: '2',
        label: 'История загрузки',
        children: <UploadHistory/>,
    },
];

const Admin = () => {
    return (
        <div className={'admin-page'}>
            <Tabs defaultActiveKey="1" items={items}/>
        </div>
    );
};

export default Admin;