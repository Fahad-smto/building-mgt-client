import { Link, useRouteError } from "react-router";
import { FaExclamationTriangle } from "react-icons/fa";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error); // Optional: log for debugging

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center p-6">
      <FaExclamationTriangle className="text-red-500 text-6xl mb-4" />
      <h1 className="text-4xl font-bold text-gray-800 mb-2">Oops!</h1>
      <p className="text-lg text-gray-600 mb-4">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-sm text-gray-500 mb-6">
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/" className="btn btn-primary">
        Go to Homepage
      </Link>
    </div>
  );
};

export default ErrorPage;
