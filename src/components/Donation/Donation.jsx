/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {
  const [donation, setDonation] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [donationLength, setDonationLength] = useState(4);
  const [showAll, setShowAll] = useState(false); // To track whether "Show All" or "Show Less" is clicked
  
  useEffect(() => {
    const donationItems = JSON.parse(localStorage.getItem("donation"));
    if (donationItems) {
      setDonation(donationItems);
    } else {
      setNotFound("no data found");
    }
  }, []);

  // Check if there are 5 or more donation cards
  const shouldShowSeeAllButton = donation.length >= 5;

  // Toggle between "Show All" and "Show Less"
  const toggleShowAll = () => {
    if (showAll) {
      setDonationLength(4);
    } else {
      setDonationLength(donation.length);
    }
    setShowAll(!showAll);
  };

  return (
    <div>
      {notFound ? (
        <p className="h-[80vh] flex justify-center items-center">{notFound}</p>
      ) : (
        <div>
          <div className="grid grid-cols-2">
            {donation.slice(0, donationLength).map((cart) => (
              <DonationCard key={cart.id} cart={cart} />
            ))}
          </div>
          {shouldShowSeeAllButton && (
            <div>
              <button
                onClick={toggleShowAll}
                className="btn btn-primary lg:ml-[600px] px-14"
              >
                {showAll ? "Show Less" : "Show All"}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Donation;
