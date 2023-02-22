import React from "react";
import ProfileStatsBox from './ProfileStatsBox.js' 


export default function Profile({currUser}) {
  console.log(currUser.username)
return(
  <div className='flex flex-col items-center' >
    <ProfileStatsBox currUser={currUser}/>
  </div>
  
)

}