/* eslint-disable no-alert */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';

export default function SignUp(props) {
  // eslint-disable-next-line react/prop-types
  const {
    type, id, name, placeholder, handleChange, value,
  } = props;
  function basicValidation(e) {
    if (type === 'number' && value.length === 10) {
      const ch = String.fromCharCode(e.which);
      // console.log(ch);
      if (
        !/[0-9]/.test(ch)
        && e.which === 9
        && e.which === 11
        && e.which === 8
      ) {
        e.preventDefault();
      }
    } else if (type === 'text' && id !== 'address') {
      const ch2 = String.fromCharCode(e.which);
      if (/[0-9]/.test(ch2)) {
        e.preventDefault();
      }
    }
  }
  return (
    <>
      <input
        type={type}
        onChange={handleChange}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        onKeyDown={basicValidation}
        min={1}
      />
    </>
  );
}
