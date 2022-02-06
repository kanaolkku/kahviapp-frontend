import React from "react";
import "./Notification.css";

const Notification = ({
  type,
  message,
}: {
  type?: string;
  message?: string;
}) => {
  // only show notification when it has a type
  if (type) {
    return (
      <div className={"notification " + type}>
        <p>{message}</p>
      </div>
    );
  } else {
    return null;
  }
};

export default Notification;
