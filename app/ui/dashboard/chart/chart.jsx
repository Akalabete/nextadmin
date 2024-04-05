"use client";

import { Legend, ResponsiveContainer, LineChart, YAxis, XAxis, Line, Tooltip } from 'recharts';
import styles from './chart.module.css';

const data = [
    {
        name: 'Mon',
        visit: 2000,
        click: 2400,
    },
    {
        name: 'Tue',
        visit: 3000,
        click: 1400,
    },
    {
        name: 'Wed',
        visit: 3500,
        click: 3400,
    },
    {
        name: 'Thu',
        visit: 1000,
        click: 1400,
    },
    {
        name: 'Fri',
        visit: 1000,
        click: 6400,
    },
    {
        name: 'Sat',
        visit: 3000,
        click: 2400,
    },
    {
        name: 'Sun',
        visit: 2000,
        click: 2400,
    },
]

const Chart = () => {
    
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Weekly Recap</h2>
            <ResponsiveContainer width="95%" height="80%">
                <LineChart
                    width={500}
                    height={300} 
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <YAxis />
                    <Legend />
                    <XAxis dataKey="name" />
                    <Line type="monotone" dataKey="visit" stroke="#8884d8" strokeDasharray="5 5" />
                    <Line type="monotone" dataKey="click" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
                    <Tooltip contentStyle={{background:"#151c2c", border:"none"}} />
                </LineChart>
            </ResponsiveContainer>
            
        </div>
        )
    }

export default Chart;