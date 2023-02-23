import React from "react";
import ProfileStatsCard from "./ProfileStatsCard";

export default function ProfileStatsBox({ currUser }) {
  console.log(currUser);

  //create array of keys in currUser
  //iterate through array of keys; create new ProfileStatsCard for each
  //pass it the currUser and key
  //Create array to hold newly created ProfileStatsCard elements; push each into array as created

  let statsCardArray = [];
  let keysInUser = Object.keys(currUser);

  for (let i = 0; i < keysInUser.length; i++) {
    let key = keysInUser[i];
    if (key === "username" || key === "password" || key === "isAdmin" || key === "__v" || key === "_id") continue;
    let newCard = (
      <ProfileStatsCard key={i} user={currUser} stat={currUser[key]} tracker={key} />
    );
    statsCardArray.push(newCard);
  }

  console.log("statsCardArray: ", statsCardArray);

  return (
    
    <div className="flex flex-col items-center">

      <h1>{currUser.username}</h1>
      {statsCardArray}
    </div>
  
  );
}
