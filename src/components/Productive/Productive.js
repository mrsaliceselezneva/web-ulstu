import './Productive.scss'
import Slices from "../Slices/Slices";
import {useEffect, useState} from "react";

const Productive = ({ data }) => {
    const [dataSlices, setDataSlices] = useState([]);
    useEffect(() => {
        let dataSlice = {
            "Обычный": 0,
            "Подтверждён документально": 0,
            "Подтверждён специалистом": 0,
            "Подтверждён научными источниками": 0
        };
        data.forEach((value) => {
            dataSlice[value.verification_level]++;
        })
        setDataSlices(Object
            .entries(dataSlice)
            .map((entry) => {
                return {
                    verification_level: entry[0] === "Подтверждён научными источниками"
                        ? "Подтверждён\nнаучными источниками"
                        : entry[0],
                    count: entry[1]}
            })
        )
    }, [data])

    return (
        <div className="productive_container">
            <Slices chartRootName="slices1" data={dataSlices}/>
        </div>
    )
}

export default Productive