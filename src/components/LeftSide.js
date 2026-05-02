import './leftside.css';

export default function LeftSide() {
  return (
    <div className="left-side">
      <div className="inner-card">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="bg-img"
        >
          <source src="/4K Gradient background loop visual animation(1080P_HD).mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="nebula-fallback"></div>
        <div className="content-overlay">
          <h1>Logo later</h1>
          <div className="DownSide">
            <h5>You can easily</h5>
            <h3>Get access your personal hub for clarity and productivity</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
