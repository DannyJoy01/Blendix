import React from "react";
import blendixLogo from "../icon/blendix-logo.svg";
import { Link } from "react-router-dom";

const BlendixLogo = () => {
  return (
    <Link to="/" className="block w-[42%] md:w-[25%]">
      <img src={blendixLogo} alt="Blendix logo" />
    </Link>
  );
};

export default BlendixLogo;
