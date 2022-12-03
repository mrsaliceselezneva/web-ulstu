import './Requirement.scss';

function Requirement ({icon, requirementText, del}) { 
    return (
       <div className='requirement-block'>
           {icon}
           {requirementText}
           {del}
       </div> 
    )
};

export default Requirement;