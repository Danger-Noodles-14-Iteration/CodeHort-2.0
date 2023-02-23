import React from 'react'
import Heat from '../assets/heat.gif';

const PopupModal = ({ setModalState, currentStudent }) => {
  console.log(currentStudent);
  return (
    <div className='popup-modal'>

      {/* <video id='straight-heat' src={Heat} type='video/mp4'></video> */}
      <img src={Heat} alt="heat gif" />

      <div className="info-container">

        <header>
          <h1>{currentStudent.username}</h1>
          <button type='button' onClick={() => setModalState(false)}>X</button>
        </header>

        <div className="cohort-info">
          Cohort #{currentStudent.cohort}
        </div>

        <section>

          <div className="counter-container">
            <p>Called On: </p>
            <p>{currentStudent.calledOn}</p>
          </div>

          <div className="counter-container">
            <p>General Participation: </p>
            <p>{currentStudent.participation}</p>
          </div>

          <div className="counter-container">
            <p>Power Claps: </p>
            <p>{currentStudent.powerClap}</p>
          </div>

          <div className="counter-container">
            <p>Stretches: </p>
            <p>{currentStudent.stretches}</p>
          </div>

          <div className="counter-container">
            <p>Raised Hand: </p>
            <p>{currentStudent.raisedHand}</p>
          </div>

          <div className="counter-container">
            <p>Hour Tracker: </p>
            <p>{currentStudent.hourTracker}</p>
          </div>

          <div className="counter-container">
            <p>Code of Conducts: </p>
            <p>{currentStudent.codeOfConduct}</p>
          </div>

          <div className="counter-container">
            <p>Burg'd: </p>
            <p>{currentStudent.burged}</p>
          </div>

        </section>
      </div>

    </div>
  )
}

export default PopupModal