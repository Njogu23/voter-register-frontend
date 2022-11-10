import React from "react";

const SearchBar = ({voter, handleSearch}) =>{
  

    return(
        <div style={{padding:"15px", textAlign:"center", background:"gold"}}>
            <input type="search" placeholder="search by id..." onChange={handleSearch} style={{fontSize:"25px", border:"none", borderRadius:"12px"}} ></input>
            {voter}
        </div>
    )
}

export default SearchBar;