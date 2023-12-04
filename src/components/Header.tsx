import { Link } from "react-router-dom";
import { LOGO_URL } from "../Utilities/Constant";
import { useState } from "react";
const Header = () => {
  const [isUserlogin, setisUserLogin] = useState<string>("Login");
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} alt="logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {isUserlogin ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              isUserlogin === "Login"
                ? setisUserLogin("Logout")
                : setisUserLogin("Login");
            }}
          >
            {isUserlogin}
          </button>

          {/* <li className="px-4 ">{loggedInUser}</li> */}
        </ul>
      </div>
    </div>
  );
};
export default Header;
