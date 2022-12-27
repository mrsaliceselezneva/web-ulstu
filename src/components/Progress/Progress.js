import React, {useEffect, useState} from 'react';
import LineChart from "../LineChart/LineChart";

const Progress = ({ data }) => {
    const [dataChart, setDataChart] = useState([]);
    useEffect(() => {
        setDataChart(data.map((value, index) => {return {value: index + 1, date: Date.parse(value.created)}}));
    }, [data])

    return (
        <LineChart chartRootName="chart1" data={dataChart}/>
    );
};

export default Progress;