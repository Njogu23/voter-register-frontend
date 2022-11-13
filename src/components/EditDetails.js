import React, { useState } from "react";
import { Link } from "react-router-dom";
import StationSelection from "./StationSelection";
import "../home.css";

const EditDetails = ({ stationData,  voterInfo}) => {
    
  const [record, setRecord] = useState(voterInfo);

  const { id_number } = record;
  console.log(id_number);

  const handleChange = (e) => {
    e.preventDefault();
    setRecord({
      ...record,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:9292/voters/${id_number}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(record),
    });
    console.log(record);

  };
  return (
    <div className="form-box">
      <h3>Edit Details</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input
            type="text"
            placeholder="first name..."
            name="first_name"
            value={record.first_name}
            onChange={handleChange}
            style={{ marginBottom: "20px" }}
          ></input>
        </div>
        <div>
          <label>Middle Name</label>
          <input
            type="text"
            placeholder="middle name..."
            name="middle_name"
            value={record.middle_name}
            onChange={handleChange}
            style={{ marginBottom: "20px" }}
          ></input>
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            placeholder="last name..."
            name="last_name"
            value={record.last_name}
            onChange={handleChange}
            style={{ marginBottom: "20px" }}
          ></input>
        </div>
        <div>
          <label>ID Number</label>
          <input
            type="text"
            placeholder="Enter ID..."
            name="id_number"
            value={record.id_number}
            onChange={handleChange}
            style={{ marginBottom: "20px" }}
          ></input>
        </div>
        <div>
          <label>D.O.B</label>
          <input
            type="date"
            max="2004-01-01"
            name="DOB"
            value={record.DOB}
            onChange={handleChange}
            style={{ marginBottom: "20px" }}
          ></input>
        </div>
        {/* <div>
          <label>Age</label>
          <br />
          <input
            type="text"
            placeholder="Add age..."
            name="age"
            value={record.age}
            onChange={handleChange}
          ></input>
        </div> */}
        <div>
          <label>Gender</label>
          <select
            name="gender"
            value={record.gender}
            onChange={handleChange}
            style={{
              marginBottom: "20px",
              width: "350px",
              height: "40px",
              borderRadius: "5px",
              border: "solid"
            }}
          >
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
          <button
            className="regButton"
            type="submit"
            style={{ margin: "40px" }}
            onClick={() => alert("update successful")}
          >
            Update
          </button>
          <Link to="/">
            <button className="regButton" style={{ margin: "40px" }}>
              Home
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default EditDetails;

// onClick={history.push("/voters")}
// onClick = { redirectToVoters }; 