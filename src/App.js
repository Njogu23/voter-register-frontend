import React,{ useState, useEffect} from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import AddVoter from "./pages/AddVoter";
import NavBar from "./pages/NavBar";
import PollingStationsList from "./pages/PollingStationList";
import EditDetails from './components/EditDetails';
import Home from "./pages/Home";
import './form.css';
import './home.css';
import "./nav.css"


function App() {
  const [stationData, setStationData] = useState([])
    
    useEffect(()=>{
        fetch("http://localhost:9292/pollingstations")
        .then(r => r.json())
        .then(d => setStationData(d))
    },[])


  return(
    <>
      <BrowserRouter>
        <Route>
            <NavBar path='/' />
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
      </BrowserRouter>
    </>
  )
}

export default App;
