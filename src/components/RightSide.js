import React from 'react';
import { FaBehance, FaGoogle, FaFacebook } from 'react-icons/fa';
import './rightside.css';

export default function RightSide({ isLogin, toggleMode }) {
  return (
    <div className="right-side">
      <div className="asterisk-icon">*</div>
      <div className="form-header">
        <h3>{isLogin ? 'Create an account' : 'Welcome Back'}</h3>
        <p>Access your tasks, notes, and projects anytime, anywhere - and keep everything flowing in one place.</p>
      </div>
      
      <form className="login-form" onSubmit={(e) => e.preventDefault()}>
        {isLogin && (
          <div className="input-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" placeholder="Faraz Haider" />
          </div>
        )}

        <div className="input-group">
          <label htmlFor="email">Your email</label>
          <input type="email" id="email" name="email" placeholder="farazhaidet786@gmail.com" />
        </div>

        {isLogin && (
          <div className="input-group">
            <label htmlFor="confirmEmail">Confirm email</label>
            <input type="email" id="confirmEmail" name="confirmEmail" placeholder="farazhaidet786@gmail.com" />
          </div>
        )}
        
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <div className="password-wrapper">
            <input type="password" id="password" name="password" placeholder="••••••••••••" />
            <span className="eye-icon">👁️</span>
          </div>
        </div>

        {isLogin && (
          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" name="confirmPassword" placeholder="••••••••••••" />
          </div>
        )}
        
        <button type="submit" className="submit-btn">
          {isLogin ? 'Get Started' : 'Sign In'}
        </button>
      </form>

      <div className="divider">
        <span>or continue with</span>
      </div>

      <div className="social-auth">
        <button className="social-btn" type="button"><FaBehance size={20} /></button>
        <button className="social-btn" type="button"><FaGoogle size={20} /></button>
        <button className="social-btn" type="button"><FaFacebook size={20} /></button>
      </div>

      <p className="footer-note">
        {isLogin ? "Already have an account?" : "Don't have an account?"}
        <span className="toggle-link" onClick={toggleMode} style={{ cursor: 'pointer', color: 'var(--primary)', fontWeight: 'bold', marginLeft: '5px' }}>
          {isLogin ? 'Sign in' : 'Sign up'}
        </span>
      </p>
    </div>
  );
}