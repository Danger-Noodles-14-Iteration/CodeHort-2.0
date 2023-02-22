import React from "react";
import ProfileStatsCard from './ProfileStatsCard';


export default function ProfileStatsBox({currUser}) {

  console.log(currUser)
  
  //create array of keys in currUser
  //iterate through array of keys; create new ProfileStatsCard for each
    //pass it the currUser and key
  let keysInUser = Object.keys(currUser);
  
  return(
    

  
  <div className='flex flex-col items-center' >
    <ProfileStatsCard currUser = {currUser}/>
    <div className='cursor-pointer rounded-br-lg bg-gradient-to-bl from-fuchsia-900 via-gray-600 to-fuchsia-900 hover:bg-indigo-500 shadow-lg shadow-indigo-500/50 text-2xl font-extrabold ...text-white font-robotics bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500... hover:text-black w-fit p-4 border border-black m-2  hover:shadow-[0_4px_0px_rgb()] text-indigo bg-white ease-out hover:translate-y-1 transition-all rounded">
    hover effect 1'
    >
      Name: {currUser.username}</div>
    <div className='cursor-pointer rounded-br-lg bg-gradient-to-bl from-fuchsia-900 via-gray-600 to-fuchsia-900 hover:bg-indigo-500 shadow-lg shadow-indigo-500/50 text-2xl font-extrabold ...text-white font-robotics bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500... hover:text-black w-fit p-4 border border-black m-2  hover:shadow-[0_4px_0px_rgb()] text-indigo bg-white ease-out hover:translate-y-1 transition-all rounded">
    hover effect 1'
    > Cohort: {currUser.cohort}</div>
    <div className='cursor-pointer rounded-br-lg bg-gradient-to-bl from-fuchsia-900 via-gray-600 to-fuchsia-900 hover:bg-indigo-500 shadow-lg shadow-indigo-500/50 text-2xl font-extrabold ...text-white font-robotics bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500... hover:text-black w-fit p-4 border border-black m-2  hover:shadow-[0_4px_0px_rgb()] text-indigo bg-white ease-out hover:translate-y-1 transition-all rounded">
    hover effect 1'
    > Participation Times: {currUser.participation}</div>
  </div>
)

}