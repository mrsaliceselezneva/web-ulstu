import axios from "axios";
import React, { useState } from 'react';
import './Profile.scss';
import Requirement from '../../components/Requirement/Requirement';
import { FiUser, FiPlusCircle, FiXCircle, FiEdit, FiMail, FiPhone } from 'react-icons/fi';
import { useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";

function Profile(){
    const {email, token} = useSelector(state => state.userReducer);
    const [searchValue, setSearchValue] = useState('');
    const [localFirstName, setLocalFirstName] = useState('');
    const [localLastName, setLocalLastName] = useState('');
    const [localFutherName, setLocalFutherName] = useState('');
    const [localEmail, setLocalEmail] = useState('');
    const [localPhone, setLocalPhone] = useState('');


    const [userRequirementsList, setUserRequirementsList] = useState([]);
    const [requirementsList, setRequirementsList] = useState([]);

    const [requirementInput, setRequirementInput] = useState('');


    const searchRequirements =
        requirementsList.map((value) => <Requirement
            requirementText={value.name}
            del={< FiPlusCircle className='icon-add' onClick={() => addRequirement(value.id)} />}
        />);

    let { search } = useLocation();
    const params = new URLSearchParams(search);
    const localUserId = params.get('id');

    React.useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/user/?id=${localUserId}`)
            .then((response) => {
                setUserRequirementsList(response.data.competenceIds);
                setLocalFirstName(response.data.firstName);
                setLocalLastName(response.data.lastName);
                setLocalFutherName(response.data.patronymic);
                setLocalEmail(response.data.email);
                setLocalPhone(response.data.phone);
            });

        axios
            .get(`${process.env.REACT_APP_API_URL}/competence/list`)
            .then((response) => {
                setRequirementsList(response.data);
            });   
    }, []); 
    
    function addRequirement(requirementId) {
        console.log('add-requirement');

        const headers = {
            Authorization: `Bearer ${token}`,
        };
        var data = {
            competenceId: requirementId,
          }
          ;
        axios
            .post(`${process.env.REACT_APP_API_URL}/user/competence`, data, { headers })
            .then((response) => {
                
            })
            .catch((error) => {
                console.log(error);
            });

        window.location.reload();
    }

    function deleteRequirement(requirementId) {
        console.log('delete-requirement');
        console.log(requirementId);
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        axios
            .delete(`${process.env.REACT_APP_API_URL}/user/competence?id=${requirementId}`, { headers })
            .then((response) => {
                window.location.reload();
            })
            .catch((error) => {
            });
    }


    return (
        <div className='project'>
            <div className='main'>
                <div className='main-top-section'>
                    <div className='info'>
                        <div className='name'>{''}</div>
                        <Requirement
                            icon={<FiUser className='requirement-icon-user' />}
                            requirementText={localFirstName + ' ' + localLastName}
                        />
                        <Requirement
                            icon={<FiPhone className='requirement-icon-date' />}
                            requirementText={localPhone}
                        />
                        <Requirement
                            icon={<FiMail className='requirement-icon-date' />}
                            requirementText={localEmail}
                        />
                        <div className='description'>
                        </div>
                    </div>
                </div>
                <div className='main-bottom-section'>
                    <div className='requirements-section'>
                        <div className='requirements-title'>
                            Мои навыки
                        </div>
                        <div className='requirements-list'>
                            {
                                userRequirementsList.map((requirement, id) => (
                                    <Requirement
                                        requirementText={requirement}
                                        del={localEmail === email ?
                                            <FiXCircle  className='icon-delete' onClick={() => deleteRequirement(requirement)} /> :
                                            null
                                        }
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className='participants'>
                <div className='participants-title'>
                    Все навыки
                </div>
                {searchRequirements}
            </div>
        </div>
    );
}

export default Profile;