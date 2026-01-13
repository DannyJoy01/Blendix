import blendixLogo from "./blendix-logo.svg";
import { Link } from "react-router-dom";

const BlendixLogo = () => {
  return (
    <Link to="/" className="">
      <img className="w-8 h-8" src={blendixLogo} alt="Blendix logo" />
    </Link>
  );
};

export default BlendixLogo;
