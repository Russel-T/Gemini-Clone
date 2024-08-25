import React, { useContext } from "react";
import "./main.css";
// import { Context } from "../../context/context";
import { Context } from "./context/Context.jsx";
const main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <i className="bi bi-person"></i>
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Russel</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to see on an upcoming trip</p>
                <i className="bi bi-compass"></i>
              </div>
              <div className="card">
                <p>Briefly summarize this concept: Computer Science</p>
                <i className="bi bi-lightbulb"></i>
              </div>
              <div className="card">
                <p>Brainstorm team bonding activities for our work retreat</p>
                <i className="bi bi-chat"></i>
              </div>
              <div className="card">
                <p>Improve the readability of the following code</p>
                <i className="bi bi-braces"></i>
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <i className="bi bi-person"></i>
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <i className="bi bi-stars"></i>
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div>
              <i className="bi bi-image"></i>
              <i className="bi bi-mic"></i>
              {input ? (
                <i onClick={() => onSent()} className="bi bi-send"></i>
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            This product may not always be accurate; please verify information
            independently.
          </p>
        </div>
      </div>
    </div>
  );
};

export default main;
