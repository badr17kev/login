import React, { useState } from 'react';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import './login.css';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleMode = () => setIsLogin(!isLogin);

  return (
    <div className="login-wrapper">
      <div className="bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <div
        className={`container ${isLogin ? 'mode-login' : 'mode-signup'}`}
        style={{
          display: 'flex',
          flexDirection: isLogin ? 'row' : 'row-reverse'
        }}
      >
        <div style={{ flex: 1, display: 'flex' }}>
          <LeftSide />
        </div>
        <div style={{ flex: 1.2, display: 'flex' }}>
          <RightSide isLogin={isLogin} toggleMode={toggleMode} />
        </div>
      </div>
    </div>
  );
}
