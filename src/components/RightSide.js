import './rightside.css';

export default function RightSide() {
  return (
    <div className="right-part">
      <div className="top-star">*</div>
      <div className="header-text">
        <h3>Create an account</h3>
        <p>Access your tasks, notes, and projects anytime, anywhere - and keep everything flowing in one place.</p>
      </div>

      <form className="my-form">
        <div className="field">
          <label htmlFor="email">Your email</label>
          <input type="email" id="email" name="email" placeholder="farazhaidet786@gmail.com" />
        </div>

        <div className="field">
          <label htmlFor="password">Password</label>
          <div className="pass-box">
            <input type="password" id="password" name="password" placeholder="••••••••••••" />
          </div>
        </div>

        <button type="submit" className="main-btn">Get Started</button>
      </form>

      <div className="line-break">
        <span>or continue with</span>
      </div>

      <div className="socials">
        <button className="social-item">Bē</button>
        <button className="social-item">G</button>
        <button className="social-item">f</button>
      </div>

      <p className="bottom-link">
        Don't have an account? <a href="#signup">Sign up</a>
      </p>
    </div>
  );
}