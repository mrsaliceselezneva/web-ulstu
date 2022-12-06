import React, { useState } from 'react';
import axios from "axios";
import './CreateProject.scss';
import { useSelector, useDispatch } from "react-redux";
import { FiPlusCircle, FiLayout, FiToggleLeft, FiToggleRight } from 'react-icons/fi';
import format from "date-fns/format";

function create(name, description, token) {
  console.log();
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
      window.location.assign(`${process.env.REACT_APP_URL}/projects`);
    })
    .catch((error) => {
    });
}

function CreateProject() {
  const { token, firstName, lastName, futherName } = useSelector(state => state.userReducer);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div className='create'>
      <input className='name' placeholder='Название проекта'
        onChange={(event) => {
          setName(event.target.value);
        }} />
      <input className='description' placeholder='Описание проекта'
        onChange={(event) => {
          setDescription(event.target.value);
        }} />
      <div className='requirements'>
      </div>
      <button className='create' onClick={() => {
        create(name, description, token, firstName, lastName, futherName)
      }}>Создать</button>
    </div>
  );
}

export default CreateProject;