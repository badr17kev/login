import React from 'react';
import './leftside.css';

export default function LeftSide() {
  return (
    <div className="left-side">
      <div className="inner-card" style={{ backgroundImage: 'url(/bigleague.jpg)' }}>
        <div className="asterisk">*</div>
        <div className="bottom-text">
          <p className="small-text">You can easily</p>
          <h2>Get access your personal hub for clarity and productivity</h2>
        </div>
      </div>
    </div>
  );
}
