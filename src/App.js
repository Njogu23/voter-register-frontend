import React,{ useState, useEffect} from "react";
import { BrowserRouter, Route, Switch, Link} from "react-router-dom";
import AddVoter from "./pages/AddVoter";
import NavBar from "./pages/NavBar";
import PollingStationsList from "./pages/PollingStationList";
import EditDetails from './components/EditDetails';
import Home from "./pages/Home";
import EditDetails from "./components/EditDetails";
import Voters from "./components/Voters";
import { Link } from "react-router-dom";
import './form.css';
import './home.css';
import "./nav.css"


function App() {
  const [stationData, setStationData] = useState([]);
  const [votersList, setVotersList] = useState([]);
  const [search, setSearch] = useState("");
  const [voterInfo, setVoterInfo] = useState("");
  const [target, setTarget] = useState("");

    //fetch all polling stations
    useEffect(()=>{
        fetch("http://localhost:9292/pollingstations")
        .then(r => r.json())
        .then(d => setStationData(d))
    },[])

    //fetch all voters
    useEffect(() => {
      fetch("http://localhost:9292/voters")
        .then((r) => r.json())
        .then((d) => setVotersList(d));
    }, []);

    //delete a specific voter
    const deleteVoter = (id) => {
      const newVotersList = votersList.filter((voter) => voter.id !== id);
      setVotersList(newVotersList);
    };

    //search user by id_number
    const searchFilter = votersList.filter((voter) => {
      if (search === "") {
        return false;
      } else {
        return voter.id_number === parseInt(search, 10);
      }
    });

    //delete voter
    const handleDelete = (e) => {
      console.log(e.target.value);
      fetch(`http://localhost:9292/voters/${e.target.value}`, {
        method: "DELETE",
      });

      deleteVoter(e.target.value);
    };

    //display matching voter details
    const voter = searchFilter.map((voter) => {
      //setVoterInfo(voter);
      return (
          <div
            key={voter.id}
            style={{
              padding: "2px",
              border: "solid",
              borderRadius: "8px",
              color: "white",
              background: "#556b02",
              marginTop: "10px",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            <h2>
              Name : {voter.first_name} {voter.middle_name} {voter.last_name}
            </h2>
            <h4>Date Of Birth : {voter.DOB}</h4>
            <h4>ID Number : {voter.id_number}</h4>
            <h4>Polling Station : {voter.polling_station_id}</h4>
            <div>
              <Link to="/edit">
                <button
                  className="regButton"
                  onClick={() => setVoterInfo(voter)}
                  value={voter.id}
                  style={{ marginRight: "20px" }}
                >
                  Edit Details
                </button>
              </Link>
              <Link to="/">
                <button
                  className="regButton"
                  onClick={handleDelete}
                  value={voter.id}
                >
                  delete
                </button>
              </Link>
            </div>
          </div>
      );
    });

    //sets value of search term
    const handleSearch = (e) => {
      setSearch(e.target.value);
      console.log(e.target.value)
    };

    //set value of target polling station
    const handleVoters = (e) => {
      setTarget(e.target.value);
    };


  return (
    <>
      <BrowserRouter>
        <Route>
          <NavBar path="/" />
        </Route>
          <Switch>
            <Route path='/registration'>
              <AddVoter stationData={stationData} />
            </Route>
            <Route path="/voters">
              <PollingStationsList stationData={stationData} />
            </Route>
            <Route>
              <EditDetails path="/edit" stationData={stationData}/>
            </Route>
            <Route exact path="/">
              <Home stationData={stationData} />
            </Route>
          </Switch>
        <Switch>
          <Route path="/registration">
            <AddVoter stationData={stationData} />
          </Route>
          <Route path="/voters">
            <PollingStationsList
              votersList={votersList}
              stationData={stationData}
              voter={voter}
              handleSearch={handleSearch}
              handleVoters={handleVoters}
            />
          </Route>
          <Route exact path="/edit">
            <EditDetails stationData={stationData} voterInfo={voterInfo}/>
          </Route>
          <Route exact path="/voterslist">
            <Voters target={target}  votersList={votersList} stationData={stationData}/>
          </Route>
          <Route exact path="/">
            <Home stationData={stationData} />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
