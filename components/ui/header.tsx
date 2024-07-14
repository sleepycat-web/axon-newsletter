import React from 'react'
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <div className="navbar w-full ">
      <Link href="/" className="btn btn-ghost text-lg">
        <FontAwesomeIcon icon={faArrowLeft} />
      </Link>
    </div>
  );
}

export default Header