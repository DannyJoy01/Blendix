import React from "react";
import blendixLinkedln from "../../assets/icon/blendix_linkedln.svg";
const BlendixLinkedln = () => {
  return (
    <div>
      <a
        href="https://www.linkedin.com/in/olabanji-abiola-396aa7169/"
        target="_blank"
      >
        <img
          src={blendixLinkedln}
          alt="Blendix LinkedIn"
          className="lg:w-[25px]"
        />
      </a>
    </div>
  );
};

export default BlendixLinkedln;
