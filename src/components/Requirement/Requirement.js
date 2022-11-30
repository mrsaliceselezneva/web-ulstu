import './Requirement.scss';

function Requirement ({icon, requirementText}) { 
    return (
       <div className='requirement-block'>
           {icon}
           {requirementText}
       </div> 
    )
};

export default Requirement;