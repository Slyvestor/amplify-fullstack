import React from 'react';

function Sidebar({ survey, setSelectedSection }) {
  return (
    <div className="sidebar">
      <ul className="list-group">
        {survey.map((section, index) => (
          <li
            key={index}
            className="list-group-item"
            style={{ cursor: 'pointer' }}
            onClick={() => setSelectedSection(section)}
          >
            {section.heading}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
