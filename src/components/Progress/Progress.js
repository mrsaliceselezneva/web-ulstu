import React from 'react';
import LineChart from "../LineChart/LineChart";

const Progress = () => {
    return (
        <LineChart chartRootName="chart1" data={
            [
                { value: 1, date: new Date(2022, 10, 20).getTime() },
                { value: 2, date: new Date(2022, 10, 30).getTime() },
                { value: 3, date: new Date(2022, 11, 7).getTime() },
                { value: 4, date: new Date(2022, 11, 15).getTime() }
            ]
        }/>
    );
};

export default Progress;