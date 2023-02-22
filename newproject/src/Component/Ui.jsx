import React from 'react';
import '@fontsource/montserrat';
import './Ui.css';
import { useNavigate } from 'react-router-dom';

export default function Ui() {
  const navigate = useNavigate();
  function loginPage() {
    navigate('/login');
  }

  const details = [
    {
      Author: 'Martin Fowler',
      Description:
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      Button: 'Code',
    },
    {
      Author: 'Bill Gates',
      Description:
        'Your most unhappy customers are your greatest source of learning',
      Button: 'Eat',
    },
    {
      Author: 'Cory House',
      Description: 'Code is like humor. When you have to explain it, it’s bad.',
      Button: 'Repeat',
    },
  ];

  return details.map((item, x) => (
    <div className={`box-${x + 1}`} key={item.id} id={item.id}>
      <h3>{item.Author}</h3>
      <p>{item.Description}</p>
      <button type="button" onClick={loginPage}>{item.Button}</button>
    </div>
  ));
}
