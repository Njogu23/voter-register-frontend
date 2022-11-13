import React from "react";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";

const PollingStationsList = ({stationData, handleVoters, voter, handleSearch, votersList, deleteVoter}) => {
    // const [target, setTarget] = useState("")

    // const filterByPollingStn = votersList.filter(voter => voter.polling_station_id === target)

    // const voterInPollingStn = filterByPollingStn.map((voter, index)=>{
    //     return(
    //         <section key={voter.id} style={{padding:"10px", border:"solid", borderRadius:"8px", color:"white", margin:"5px", background:"grey", opacity:"90%"}}>
    //             <p>{index + 1}. {voter.first_name} {voter.middle_name} {voter.last_name}</p>
    //         </section>
    //     )
    // })

    // 
    // const handleVoters = (e) => {
    //   setTarget(e.target.value);
    // }; 

    // const handleDelete = () => {
    //     setTarget(null)
    //   }


    const stationList = stationData.map((stn)=> {
        return (
          <>
            <div
              key={stn.id}
              style={{ textAlign: "center", justifyContent: "center" }}
            >
              <Link to="/voterslist">
                <button
                  onFocus={handleVoters}
                  value={stn.id}
                  style={{
                    fontSize: "15px",
                    background: "white",
                    color: "black",
                    padding: "15px",
                    cursor: "pointer",
                    margin: "2px",
                    width: "300px",
                    border: "none",
                  }}
                  onMouseOver={(e) => (e.target.style.background = "#556b02")}
                  onMouseOut={(e) => (e.target.style.background = "white")}
                >
                  {stn.name}
                </button>
              </Link>
              {/* <button
                onFocus={handleVoters}
                value={stn.id}
                style={{
                  fontSize: "15px",
                  background: "#0ABAB5",
                  color: "white",
                  padding: "15px",
                  cursor: "pointer",
                  margin: "2px",
                  width: "300px",
                  border: "none",
                }}
                onMouseOver={(e) => (e.target.style.background = "#00FFEF")}
                onMouseOut={(e) => (e.target.style.background = "#0ABAB5")}
              >
                {stn.name}
              </button> */}
              {/* <button
                style={{
                  fontSize: "15px",
                  background: "#0ABAB5",
                  color: "white",
                  padding: "15px",
                  cursor: "pointer",
                  margin: "2px",
                  border: "none",
                }}
                onMouseOver={(e) => (e.target.style.background = "#00FFEF")}
                onMouseOut={(e) => (e.target.style.background = "#0ABAB5")}
                onClick={handleDelete}
              >
                x
              </button>
              {voterInPollingStn} */}
            </div>
          </>
        );
    })

    return(
        <div  style={{textAlign: 'center', justifyContent: 'center'}}>
            <SearchBar handleSearch={handleSearch} voter={voter} />
            {stationList}
        </div>
        
    )
}

export default PollingStationsList;