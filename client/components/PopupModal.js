import React from "react";

const PopupModal = ({ setModalState }) => {
  return (
    <div className="popup-modal">
      <div className="info-container dark:bg-slate-500">
        <header>
          <h2>Name</h2>
          <button type="button" onClick={() => setModalState(false)}>
            X
          </button>
        </header>
      </div>
    </div>
  );
};

export default PopupModal;
