import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center min-h-16 lg:min-h-18">
      <h1 className="logo">🧭</h1>
      <nav className="ml-8 mr-auto">
        <ul className="flex justify-between items-center gap-4">
          <li>Blog</li>
          <li>Blog</li>
          <li>Blog</li>
        </ul>
      </nav>

      <div className="flex justify-between items-center gap-4">
        <button>☀️</button>
      </div>
    </header>
  );
};

export default Header;
