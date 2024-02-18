import React, { useState } from 'react';

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="relative">
      <button onClick={handleOpenPopup} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Open Popup
      </button>
      {showPopup && (
        <div className="fixed inset-0 z-10 overflow-y-auto flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-500 opacity-50"></div>
          <div className="bg-white rounded-lg p-8 max-w-md text-center z-20">
            <p className="text-lg font-bold mb-4">Need Pillion?</p>
            <div className="flex justify-center">
              <button onClick={handleClosePopup} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mr-2 rounded">
                No
              </button>
              <button onClick={handleClosePopup} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
