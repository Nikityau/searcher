import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';

const data = [
    {
        name: 'Декабрь',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Январь',
        uv: 2000,
        pv: 6000,
        amt: 2290,
    },
    {
        name: 'Февраль',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Март',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Апрель',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Май',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];
const userData = [
    {
        name: 'Декабрь',
        uv: 3000,
        pv: 2000,
        amt: 2210,
    },
    {
        name: 'Январь',
        uv: 2000,
        pv: 2000,
        amt: 2290,
    },
    {
        name: 'Февраль',
        uv: 2780,
        pv: 3000,
        amt: 2000,
    },
    {
        name: 'Март',
        uv: 1890,
        pv: 500,
        amt: 2181,
    },
    {
        name: 'Апрель',
        uv: 2390,
        pv: 540,
        amt: 2500,
    },
    {
        name: 'Май',
        uv: 3490,
        pv: 700,
        amt: 2100,
    },
];

const Graphics = () => {
    return (
        <div className="graphics">
            <div>
                <h3>График загрузки медиа данных</h3>
                <ResponsiveContainer
                    width="100%" height={400}
                >
                    <LineChart
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="name"/>
                        <YAxis/>
                        <Tooltip/>
                        <Legend/>
                        <Line type="linear" name={'Кол-во загрузок'} dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div>
                <h3>График активности пользователей</h3>
                <ResponsiveContainer
                    width="100%" height={400}
                >
                    <LineChart
                        width={1000}
                        height={400}
                        data={userData}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="name"/>
                        <YAxis/>
                        <Tooltip/>
                        <Legend/>
                        <Line type="linear" name={'Активность'} dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Graphics;