import React from 'react';
import './rightside.css';
import { FaBehance, FaGoogle, FaFacebook } from 'react-icons/fa';

export default function RightSide() {
  return (
    <div className="right-side">
      <div className="asterisk-icon">*</div>
      <div className="form-header">
        <h3>Create an account</h3>
        <p>Access your tasks, notes, and projects anytime, anywhere - and keep everything flowing in one place.</p>
      </div>
      
      <form className="login-form">
        <div className="input-group">
          <label htmlFor="email">Your email</label>
          <input type="email" id="email" name="email" placeholder="farazhaidet786@gmail.com" />
        </div>
        
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <div className="password-wrapper">
            <input type="password" id="password" name="password" placeholder="••••••••••••" />
            <span className="eye-icon">👁️</span>
          </div>
        </div>
        
        <button type="submit" className="submit-btn">Get Started</button>
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
        Don't have an account? <a href="#signup">Sign up</a>
      </p>
    </div>
  );
}