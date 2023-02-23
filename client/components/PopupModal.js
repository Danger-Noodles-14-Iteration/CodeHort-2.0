import React from 'react'

const PopupModal = ({ setModalState, currentStudent }) => {
  console.log(currentStudent);
  return (
    <div className='popup-modal'>

      <div className="info-container">

        <header>
          <h1>{currentStudent.username}</h1>
          <button type='button' onClick={() => setModalState(false)}>X</button>
        </header>

        <section>

          <div className="counter-container">
            <p>Raised Hand: </p>
            <p>{currentStudent.raisedHand}</p>
          </div>

        </section>
      </div>

    </div>
  )
}

export default PopupModal