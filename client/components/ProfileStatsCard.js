import React, { useEffect, useState } from "react";
export default function ProfileStatsCard(props) {

  // const [trackerStat, setTrackerStat] = useState();

  // useEffect(async () => {
  //   const trackerStat = fetch(`/user/add/${trackerName}`)
  // }, [trackerStat])

  // here we add a function to handle when a tracker's button is clicked; we will need to pass the tracker's name
  async function handleTrackerIncr(trackerName) {
    // we send a patch request to the proper extension; sending our user's username in the body
    let res = await fetch(`/user/add/${trackerName}`,
      {
        method:'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: currUser.username })
      })
    // we parse our response to log it, json is asynchronous so we await it
    res = await res.json();
    console.log('tracker incremented :', res)
  }

return(
  <div className='flex flex-col items-center' >
    <div className='cursor-pointer rounded-br-lg bg-gradient-to-bl from-fuchsia-900 via-gray-600 to-fuchsia-900 hover:bg-indigo-500 shadow-lg shadow-indigo-500/50 text-2xl font-extrabold ...text-white font-robotics bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500... hover:text-black w-fit p-4 border border-black m-2  hover:shadow-[0_4px_0px_rgb()] text-indigo bg-white ease-out hover:translate-y-1 transition-all rounded">
    hover effect 1'>{props.tracker}: {props.stat}</div>
    <button onClick={() => handleTrackerIncr(props.tracker)}>+</button>
  </div>
)

}