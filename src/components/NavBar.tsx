import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <>
      <nav className="flex justify-between items-center mb-1 py-2 pt-4 px-4 md:px-8 lg:px-16">
        <Link href="/" className="flex items-center">
          <Image
            src="/svg/cat.svg"
            alt="SkyGit"
            width={40}
            height={40}
            priority
            style={{ filter: "invert(1)" }} // This inverts the colors
          />
<span className="ml-2 text-xl font-bold">SkyGit</span>
          
        </Link>
      </nav>
    </>
  );
};

export default NavBar;
