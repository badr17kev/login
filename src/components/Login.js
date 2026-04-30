import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import "./login.css";

export default function Login() {
  return (
    <div className="login-wrapper">
      <div className="login-card">
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
}
