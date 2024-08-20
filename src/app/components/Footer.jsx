import React from "react";
import Image from "next/image";
import Logo from "../../../public/white.svg";
import Content from "../components/Content";

export default function Footer() {
  return (
    <footer className="relative w-full  text-[#6482AD]">
      <div className="absolute top-0 left-0 p-10">
        <Image
          src={Logo}
          alt="Logo"
          width={50}
          height={50}
          style={{ objectFit: "contain" }}
        />
      </div>

      <div className="absolute top-0 right-0 p-8">
        <Image
          src={Logo}
          alt="Logo"
          width={50}
          height={50}
          style={{ objectFit: "contain" }}
        />
      </div>

      <Content />
    </footer>
  );
}
