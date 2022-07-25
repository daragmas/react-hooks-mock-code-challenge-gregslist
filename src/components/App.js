import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [visibleListings, setVisibleListings]= useState([])
  const [allListings, setAllListings]=useState([])

  useEffect(()=>{
    fetch('http://localhost:6001/listings')
      .then((res)=>res.json())
        .then((json)=>setAllListings(json))
  },[])

  useEffect(()=>{setVisibleListings(allListings)},[allListings])

  const handleSearchSubmit = (search)=>{
    setVisibleListings(allListings.filter((listing)=>(listing.description.toLowerCase()).includes(search.toLowerCase())?
      listing:
      null))
  }

  const handleDeleteClick = (deletedId)=>{
    setAllListings(allListings.filter((listing)=>listing.id !== deletedId? listing : null))
  }

  console.log(visibleListings)
  return (
    <div className="app">
      <Header onSearchSubmit={handleSearchSubmit}/>
      <ListingsContainer listings={visibleListings} onDeleteClick={handleDeleteClick}/>
    </div>
  );
}

export default App;
