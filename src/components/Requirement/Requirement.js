import './Requirement.scss';
import React, { useState } from 'react';

function Requirement({icon, requirementText, del, canAdd}) {
    
    const [selectedColor, setSelectedColor] = useState('requirement-block-not-select');

    function selected(){
        if (selectedColor === 'requirement-block-select'){
            setSelectedColor('requirement-block-not-select');
        }
        else{
            setSelectedColor('requirement-block-select');
        }
    }
    if (canAdd){
        return (
            <div className={selectedColor} onClick={() => {selected()}}>
                {icon}
                {requirementText}
                {del}
            </div>
        )
    }
    else{
        return (
            <div className='requirement-block-not-select'>
                {icon}
                {requirementText}
                {del}
            </div>
        )
    }
};

export default Requirement;