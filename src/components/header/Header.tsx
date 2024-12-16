import React from "react";

const Header = () => {
  return (
    <header>
      <h1 className="logo">GYEONG BAEK</h1>
      <nav>
        <ul>
          <li>Blog</li>
          <li>Blog</li>
          <li>Blog</li>
        </ul>
        <div>
          <input type="text" placeholder="Search" />
          <button>Search</button>
          <button>다크모드</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
