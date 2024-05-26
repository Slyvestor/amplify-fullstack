import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <img src={`${process.env.PUBLIC_URL}/EssHeader5.png`} alt="Header" />
      <div className="header-gradient"></div>
    </div>
  );
};

export default Header;
