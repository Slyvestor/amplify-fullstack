import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <img src={`${process.env.PUBLIC_URL}/EssHeader.png`} alt="ESS Feedback Header" className="img-fluid" />
    </div>
  );
};

export default Header;
