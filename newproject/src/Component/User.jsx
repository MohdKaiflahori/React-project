/* eslint-disable react/prop-types */
import React from 'react';

export default function User(props) {
  const { data } = props;
  console.log(data, 'data');
  return (
    <>
      <table>
        <tr>
          <th>Name</th>
          <th>Number</th>
          <th>Gender</th>
          <th>State</th>
          <th>Address</th>
        </tr>
        {data.map((x, i) => (
          <tr key={i}>
            <td>{i + 1}</td>
            <td>{x.name}</td>
            <td>{x.number}</td>
            <td>{x.gender}</td>
            <td>{x.state}</td>
            <td>{x.address}</td>
          </tr>
        ))}
      </table>
    </>
  );
}
