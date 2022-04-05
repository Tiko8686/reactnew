import { Link } from "react-router-dom";
export const StartButton = () => {
  return (
    <div className="start">
      WELCOME<br></br>
      <h1> </h1>
      <br></br>
      <Link className="btn" to="/timer">
        START
      </Link>
    </div>
  );
};
