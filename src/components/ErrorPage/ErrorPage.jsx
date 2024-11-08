import ErrorImage from "../../assets/404Error.jpg";
import Navbar from "../Navbar/Navbar";
const ErrorPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-4xl font-bold text-red-600">404 Error 😭</h1>
        <p className="text-gray-600">Page Not Found</p>
      </div>
    </div>
  );
};

export default ErrorPage;
