import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <img src={`${process.env.PUBLIC_URL}/EssHeader.png`}/>
    </div>
  );
};

export default Header;
