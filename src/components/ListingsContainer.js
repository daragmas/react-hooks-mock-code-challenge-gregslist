import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, onDeleteClick}) {
  return (
    <main>
      <ul className="cards">
        {listings.map((listing)=><ListingCard
          key={listing.id}
          id={listing.id}
          description={listing.description}
          image={listing.image}
          location={listing.location} 
          onDeleteClick={onDeleteClick}/>)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
