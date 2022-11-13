import React from 'react';
import { NavLink } from 'react-router-dom';

function Voters({target, votersList, stationData}) {
    const filterByPollingStn = votersList.filter(
      (voter) => voter.polling_station_id === target
    );

    const voterInPollingStn = filterByPollingStn.map((voter, index) => {
      return (
        <tr key={index + 3}>
          <th scope="row">{index + 1}</th>
          <td>{voter.first_name}</td>
          <td>{voter.middle_name}</td>
          <td>{voter.last_name}</td>
        </tr>
      );
    });

  return (
    <div
      style={{
        textAlign: "center",
        justifyContent: "center",
        margin: "10px",
        backgroundColor: "white",
      }}
    >
      {/* <h1>{stnName}</h1> */}
      {/* className="table table-borderless table-dark" */}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Serial</th>
            <th scope="col">First Name</th>
            <th scope="col">Middle Name</th>
            <th scope="col">Last Name</th>
          </tr>
        </thead>
        <tbody>{voterInPollingStn}</tbody>
      </table>
      <NavLink to="/voters">
        <button className="regButton" style={{ margin: "40px" }}>
          Back
        </button>
      </NavLink>
    </div>
  );
}

export default Voters