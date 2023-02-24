/* eslint-disable no-alert */
/* eslint-disable no-restricted-syntax */
/* eslint-disable max-len */
/* eslint-disable import/no-named-as-default-member */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line import/no-named-as-default
import SignUp from './SignUp';
import './Form.css';
import details from './details.json';
// import User from './User';

export default function Form() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: '',
    number: '',
    gender: '',
    state: '',
    address: '',
  });
  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  function submit(event) {
    event.preventDefault();
    for (const iterator of event.target) {
      if (iterator.type === 'radio') iterator.checked = false;
    }
    if (Object.values(data).some((v) => v === '')) {
      alert('Please fill the details of form');
    }
    // navigate('/user');
    console.log(data);
    setData({
      name: '',
      number: '',
      gender: '',
      state: '',
      address: '',
    });
  }
  return (
    <>
      <h2>Sign Up Page</h2>
      <div className="centerScreen">
        <form onSubmit={submit}>
          {details.map((x, i) => (
            <label htmlFor={x.id} key={i}>
              {x.label}
              <SignUp
                handleChange={handleChange}
                type={x.type}
                value={x.type === 'radio' ? x.value : data[x.name]}
                name={x.name}
                id={x.id}
                placeholder={x.placeholder}
                key={i}
              />
            </label>
          ))}
        </form>

      </div>
    </>
  );
}
