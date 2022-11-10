import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import StationSelection from "./StationSelection";
import "../home.css";

const EditDetails = ({ stationData, voterInfo }) => {
    
  const [record, setRecord] = useState(voterInfo);
  console.log(record);

  const { id_number } = record;

  const handleChange = (e) => {
    e.preventDefault();
    setRecord({
      ...record,
      [e.target.name]: e.target.value,
    });
  };

  //function to handle redirect
    const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:9292/voters/${id_number}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(record),
    });

  };
  return (
    <div className="form-box">
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <br />
          <input
            type="text"
            placeholder="first name..."
            name="first_name"
            value={record.first_name}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>Middle Name</label>
          <br />
          <input
            type="text"
            placeholder="middle name..."
            name="middle_name"
            value={record.middle_name}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>Last Name</label>
          <br />
          <input
            type="text"
            placeholder="last name..."
            name="last_name"
            value={record.last_name}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>ID Number</label>
          <br />
          <input
            type="text"
            placeholder="Enter ID..."
            name="id_number"
            value={record.id_number}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>D.O.B</label>
          <br />
          <input
            type="date"
            min="01/11/2004"
            name="DOB"
            value={record.DOB}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>Age</label>
          <br />
          <input
            type="text"
            placeholder="Add age..."
            name="age"
            value={record.age}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>Gender</label>
          <br />
          <select name="gender" value={record.gender} onChange={handleChange}>
            <option>-select-</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <StationSelection
          className="poll"
          stnID={record.polling_station_id}
          stationData={stationData}
          handleChange={handleChange}
        />
        <div>
          <button className="regButton" onClick={history.push("/voters")} type="submit">
            Update Details
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditDetails;
