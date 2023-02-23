import React, { useEffect, useState } from "react";
export default function ProfileStatsCard(props) {

  const [trackerStat, setTrackerStat] = useState(props.stat);

  // here we add a function to handle when a tracker's button is clicked; we will need to pass the tracker's name
  async function handleTrackerIncr(trackerName) {
    // we send a patch request to the proper extension; sending our user's username in the body
    let res = await fetch(`/user/add/${trackerName}`,
      {
        method:'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: props.user.username })
      })
    // we parse our response to log it, json is asynchronous so we await it
    console.log('tracker incremented :', res)
    res = await res.json();
    console.log('tracker incremented :', res)
    setTrackerStat(res.trackerStat)
  }

return(
    <div className="w-1/2">
      <div className='aspect-square cursor-pointer rounded-br-lg bg-gradient-to-bl from-fuchsia-900 via-gray-600 to-fuchsia-900 hover:bg-indigo-500 shadow-lg shadow-indigo-500/50 text-2xl font-extrabold ...text-white font-robotics bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500... hover:text-black w-fit p-4 border border-black m-2  hover:shadow-[0_4px_0px_rgb()] text-indigo bg-white ease-out hover:translate-y-1 transition-all rounded">
      hover effect 1'>
        {props.tracker}: {trackerStat}
        <div className='cursor-pointer rounded-br-lg bg-gradient-to-bl from-fuchsia-900 via-gray-600 to-fuchsia-900 hover:bg-indigo-500 shadow-lg shadow-indigo-500/50 text-2xl font-extrabold ...text-white font-robotics bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500... hover:text-black w-fit p-4 border border-black m-2  hover:shadow-[0_4px_0px_rgb()] text-indigo bg-white ease-out hover:translate-y-1 transition-all rounded">
      hover effect 1'>
          <button onClick={() => handleTrackerIncr(props.tracker)}>+</button>
        </div>
      </div>
    </div>
)

}