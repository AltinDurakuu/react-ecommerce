import React, { useEffect, useState } from 'react';
import './../styles/Notifaction.css';

const Notification = ({ text, onClose, show}) => {
  const [showNotification, setShowNotification] = useState(false);
  useEffect(() => {
    setShowNotification(show)
  }, [show])
  const closeNotification = () => {
    setShowNotification(false);
    if (onClose) {
      onClose();
    }
  };

  return (
    showNotification && (
      <div className="notification-container">
        <div className="notification-popup">
          <button className="close-button" onClick={closeNotification}>
            X
          </button>
          <div className="notification-content">
            <p>{text}</p>
          </div>
        </div>
      </div>
    )
  );
};

export default Notification;
