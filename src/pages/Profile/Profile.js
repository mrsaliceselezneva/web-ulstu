import axios from "axios";
import React, { useState } from 'react';
import './Profile.scss';
import Requirement from '../../components/Requirement/Requirement';
import UpdateProfile from "../../components/UpdateProfile/UpdateProfile";
import ModalRequirement from "../../components/ModalRequirement/ModalRequirement";
import ProjectPreview from "../../components/ProjectPreview/ProjectPreview";
import { FiPlusCircle, FiXCircle, FiEdit3, FiMail, FiPhone } from 'react-icons/fi';
import emoji from '../../components/assets/images/emoji.png';
import { useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";

function Profile(){
    const {email, token} = useSelector(state => state.userReducer);
    const [searchValue, setSearchValue] = useState('');
    const [localFirstName, setLocalFirstName] = useState('');
    const [localLastName, setLocalLastName] = useState('');
    const [localAvatarId, setLocalAvatarId] = useState('');
    const [localAvatar, setLocalAvatar] = useState(null);
    const [localEmail, setLocalEmail] = useState('');
    const [localPhone, setLocalPhone] = useState('');

    const [updatePassword, setUpdatePassword] = useState('');
    const [updateEmail, setUpdateEmail] = useState('');
    const [updatePhone, setUpdatePhone] = useState('');

    const [showUpdateProfile, setShowUpdateProfile] = useState(false);
    const [showModalRequirement, setShowModalRequirement] = useState(false);

    const [userRequirementsList, setUserRequirementsList] = useState([]);
    const [requirementsList, setRequirementsList] = useState([]);

    let { search } = useLocation();
    const params = new URLSearchParams(search);
    const localUserId = params.get('id');
    const [rating, setRating] = useState([]);

    React.useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/user/?id=${localUserId}`)
            .then((response) => {
                setUserRequirementsList(response.data.competences);
                setLocalFirstName(response.data.firstName);
                setLocalLastName(response.data.lastName);
                setLocalAvatarId(response.data.avatarId);
                setLocalEmail(response.data.email);
                setLocalPhone(response.data.phone);

                setUpdateEmail(response.data.email);
                setUpdatePhone(response.data.phone);
            });

        axios
            .get(`${process.env.REACT_APP_API_URL}/competence/list`)
            .then((response) => {
                setRequirementsList(response.data);
            });   

        const headers = {
            Authorization: `Bearer ${token}`,
        };
        axios
            .get(`${process.env.REACT_APP_API_URL}/files?id=${localAvatarId}`, { headers, responseType: 'blob' })
            .then((response) => {
                const url = window.URL.createObjectURL(response.data);
                setLocalAvatar(url);
            });
        
        axios
            .get(`${process.env.REACT_APP_API_URL}/project/top-views`, { headers })
            .then((response) => {
                setRating(response.data);
            });
    }, [localAvatarId]); 

    const searchRequirements =
        requirementsList.filter((value) => !userRequirementsList.find(item => item.name === value.name)).map((value) => <Requirement
            requirementText={value.name}
            del={< FiPlusCircle className='icon-add' onClick={() => addRequirement(value.id)} />}
        />);
    
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
                console.log(response.data);
            })
            .catch((error) => {
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

    function updateProfile(){
        console.log('lol');
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        var data = {
            email: updateEmail,
            phone: updatePhone,
        };
        console.log(data);
        axios
            .put(`${process.env.REACT_APP_API_URL}/user`, data, { headers })
            .then((response) => {
                
            })
            .catch((error) => {
            });
    }

    return (
        <div className='project'>
            <UpdateProfile 
                onClose={() => {setShowUpdateProfile(false);}}
                updateProfile={() => {updateProfile(); window.location.reload();}}
                showUpdateProfile={showUpdateProfile}
                updatePassword={updatePassword}
                setUpdatePassword={setUpdatePassword}
                updateEmail={updateEmail}
                setUpdateEmail={setUpdateEmail}
                updatePhone={updatePhone}
                setUpdatePhone={setUpdatePhone}
            />
            
            <ModalRequirement 
                titleModalRequirement={'Навыки'} 
                onClose={() => {setShowModalRequirement(false); window.location.reload();}}
                showModalRequirement={showModalRequirement}
                modalRequirements={searchRequirements}
            />
            <div className='main'>
                <div className='main-top-section'>
                    <img className="avatar" src={localAvatar} alt="avatar" /> 
                    <div className='info'>
                        <div className='name'>
                            {localFirstName + ' ' + localLastName}
                        </div>
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
                    <FiEdit3 className="icon-update" onClick={() => setShowUpdateProfile(true)}/>
                </div>
                <div className='main-bottom-section'>
                    <div className='requirements-section'>
                        <div className='requirements-title'>
                            Мои навыки
                            <div className='input-block-project'>
                                    <FiPlusCircle className='icon-add-block' onClick={() =>  setShowModalRequirement(true)} /> 
                                </div>
                        </div>
                        <div className='requirements-list'>
                            {
                                userRequirementsList.map((requirement, id) => (
                                    <Requirement
                                        requirementText={requirement.name}
                                        del={localEmail === email ?
                                            <FiXCircle  className='icon-delete' onClick={() => deleteRequirement(requirement.id)} /> :
                                            null
                                        }
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className='profile-all-requirements'>
                <div className='profile-all-requirements-title'>
                    Рейтинг проектов
                </div>
                    <div className={rating.length > 0 ? "top_views" : "no_projects"}>

                        {
                            rating.length > 0 ?
                                rating.map((item) => <ProjectPreview
                                    {...item} />)
                                :
                                <>
                                    <img src={emoji} />
                                    <span>У Вас нет своих проектов</span>
                                </>
                        }
                    </div>
            </div>
        </div>
    );
}

export default Profile;