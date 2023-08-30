import errorImg from "../../public/error.svg";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <>
      <div className="error-display">
        <div>
          <p>Oops, something went wrong.</p>
          <img src={errorImg} alt="" />
          <Link to="/account">Return Home</Link>
        </div>
      </div>
    </>
  );
}
