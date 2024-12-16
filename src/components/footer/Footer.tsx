import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="text-right py-4">
      <small>
        ⓒ 2024.&nbsp;
        <Link
          href="https://github.com/gyeongbaek"
          target="_blank"
          className="underline"
        >
          GYEONGBAEK
        </Link>
        &nbsp; all rights reserved.
      </small>
    </footer>
  );
};

export default Footer;
