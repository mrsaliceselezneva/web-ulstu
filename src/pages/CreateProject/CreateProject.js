import React, { useState } from 'react';
import axios from "axios";
import DeleteProject from '../../components/DeleteProject/DeleteProject';
import './CreateProject.scss';
import { useSelector } from "react-redux";
import format from "date-fns/format";
import DescriptionProject from '../../components/DescriptionProject/DescriptionProject';



function CreateProject() {
  const { token, firstName, lastName, futherName } = useSelector(state => state.userReducer);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const [showModal, setShowModal] = useState(false);

  function create(name, description, token) {

    const headers = {
      Authorization: `Bearer ${token}`,
    };
    if (description.length > 40 && name.length > 0) {
      var data = {
        description: description,
        // developmentStartDate: format(new Date().getTime(), 'dd.mm.yyyy'),
        documentId: null,
        name: name,
        previewId: null,
        requiredInvestment: true,
      };
      axios
        .post(`${process.env.REACT_APP_API_URL}/project`, data, { headers })
        .then((response) => {
          window.location.assign(`${process.env.REACT_APP_URL}/projects/project/?id=${response.data.id}`);
        })
        .catch((error) => {
        });
    }
    else {
      setShowModal(true);
    }
  }

  return (
    <div className='create-project-container'>
      <div className='create-project'>
        <DescriptionProject
          onClose={() => setShowModal(false)}
          showModalDescriptionProject={showModal}
        />
        <div className='create-project-title'>
          Создание проекта
        </div>
        <textarea className='textarea-create-project' placeholder='Название проекта'
          onChange={(event) => {
            setName(event.target.value);
          }} />
        <textarea className='textarea-create-project' placeholder='Описание проекта'
          onChange={(event) => {
            setDescription(event.target.value);
          }} />
        <button className='create-project-button' onClick={() => {
          create(name, description, token, firstName, lastName, futherName)
        }}>Создать</button>
      </div>
    </div>
  );
}

export default CreateProject;