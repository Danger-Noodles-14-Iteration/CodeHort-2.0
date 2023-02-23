import React from "react";
import ProfileStatsBox from "./ProfileStatsBox.js";

export default function Profile({ currUser }) {
  console.log(currUser.username);
  return (
    <div className="">
      <ProfileStatsBox currUser={currUser} />

    </div>
  );
}