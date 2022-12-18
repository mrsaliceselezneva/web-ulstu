import React, { useState } from 'react';
import axios from "axios";
import './CreateProject.scss';
import { useSelector } from "react-redux";
import format from "date-fns/format";

function create(name, description, token){
    const headers = {
        Authorization: `Bearer ${token}`,
    };
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
        console.log(response.data);
        // window.location.assign(`${process.env.REACT_APP_URL}/projects`);
      })
      .catch((error) => {
      });
}

function CreateProject() {
  const { token, firstName, lastName, futherName } = useSelector(state => state.userReducer);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div className='create-project'>
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
  );
}

export default CreateProject;