import errorImg from "../../public/error.svg";

export default function ErrorPage() {
  return (
    <>
      <div className="error-display">
        <img src={errorImg} alt="" />
        <p>Oops, something went wrong.</p>
      </div>
    </>
  );
}
