import React, {useState} from "react";
import Search from "./Search";

function Header({onSearchSubmit}) {
  const [searchBy, setSearchBy] = useState('')

  // useEffect(()=>{
  //   console.log(searchBy)
  // },[searchBy])

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearchInput={setSearchBy} searchBy={searchBy} onSearchSubmit={onSearchSubmit}/>
    </header>
  );
}

export default Header;
