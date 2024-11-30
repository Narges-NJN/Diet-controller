import React from 'react';
import './App.css';
import AppleImage from './img/apple_4_1.png';

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <header className="navbar">
        <div className="logo">
          <img src={AppleImage} alt="Logo" />
        </div>
        <nav>
          <a href="#how-it-works">How it works?</a>
          <a href="#contact">Contacts</a>
          <a href="#faq">F.A.Q</a>
        </nav>
      </header>

      {/* Main Content */}
      <div className="main-container">
        {/* Left Section */}
        <div className="left-section">
          <h1>Managing your diabetic meal plans has never been easier!</h1>
          <p>
            Get the best personalized meal plans based on your health condition
            and preferences.
          </p>
          <button className="start-chat-button">Start to chat</button>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <p className="ai-info">
            AI powered health data analysis <br />
            Explainable meal plans based on medical facts
          </p>
          <div className="chat-bubble user-bubble">
            <p>
              I’ve been craving something sweet like chocolate or cookies. Can
              I eat these?
            </p>
          </div>
          <div className="chat-bubble response-bubble">
            <p>
              Sure, we’ll find a way to include your craving in the meal plan.
              Here’s the step-by-step guide: ...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
