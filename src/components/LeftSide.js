import './leftside.css';

export default function LeftSide() {
  return (
    <div className="left-part">
      <div className="img-box" style={{ backgroundImage: 'url(/bigleague.jpg)' }}>
        <div className="star">*</div>
        <div className="info">
          <p className="tiny">You can easily</p>
          <h2>Get access your personal hub for clarity and productivity</h2>
        </div>
      </div>
    </div>
  );
}

