import React, { useState } from "react";
import "./Sidebar.css";
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.8.1/font/bootstrap-icons.min.css"
/>;

const Sidebar = () => {
  const [extended, setExtended] = useState(false);

  return (
    <div className="sidebar">
      <div className="top">
        <i
          onClick={() => setExtended(!extended)}
          className="bi bi-list menu"
        ></i>
        <div className="new-chat">
          <i className="bi bi-plus-lg"></i>
          {extended ? <p>New Chat</p> : null}
        </div>

        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
              <i className="bi bi-chat"></i>
              <p>What is react...</p>
            </div>
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <i className="bi bi-question-lg"></i>
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <i className="bi bi-clock-history"></i>
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <i className="bi bi-gear"></i>
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
