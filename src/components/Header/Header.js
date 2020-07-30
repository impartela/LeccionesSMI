import React from "react";
import logo from '../../assets/logo.png'; 

const Header = () => {
  return (
    <div className = "shadow-md bg-gray-100 w-full mx-auto flex justify-center">
      <img className = "w-1/3 md:w-1/6 sm:w-1/4 my-3" src = {logo} alt="Logo"/>
    </div>
  )
}

export default Header;