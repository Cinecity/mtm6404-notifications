import { useState } from "react";
import data from "./notifications";



import "./App.css";

function NotificationItem({ onClear, children, name }) {
  return (
    <div className="my-notif">
      <h3>{name}</h3>
      {children}
      <button onClick={onClear}>Clear</button>
    </div>
  );
}

function Notifications({ notifications, onClearNotification }) {
  
  return (
    <div className="list">
      {notifications.map((notification) => (
        <NotificationItem
          key={notification.id}
          
          name={notification.name}

          onClear={() => onClearNotification(notification.id)}
        >
          <h3>{notification.title}</h3>
          <p>{notification.message}</p>
        </NotificationItem>
      ))}
    </div>
  );
}

function ClearButton({ onClearAll, isDisabled }) {
  return (
    <button onClick={onClearAll} disabled={isDisabled}>
      Clear All
    </button>
  );
}

function App() {
  const [notifications, setNotifications] = useState(data);

  const handleClearNotification = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
  };

  const handleClearAllNotifications = () => {
    setNotifications([]);
  };

  return (
    <div className="App">
      <h1>
        Notifications: {notifications.length}
      </h1>
      <Notifications
        notifications={notifications}
        onClearNotification={handleClearNotification}
      />
      <ClearButton
        onClearAll={handleClearAllNotifications}
        isDisabled={notifications.length === 0}
      />
    </div>
  );
}

export default App;