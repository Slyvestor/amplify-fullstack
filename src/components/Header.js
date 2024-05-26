import React, { useState } from 'react';
import SurveyStatement from './SurveyStatement';
import { Collapse } from 'react-bootstrap';

function SurveySection({ section }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="survey-section mb-4">
      <h2
        className="h4 mb-3"
        onClick={() => setOpen(!open)}
        style={{ cursor: 'pointer' }}
        aria-controls={`collapse-${section.heading}`}
        aria-expanded={open}
      >
        {section.heading}
      </h2>
      <Collapse in={open}>
        <div id={`collapse-${section.heading}`}>
          {section.statements.map((statement, index) => (
            <SurveyStatement key={index} statement={statement} />
          ))}
        </div>
      </Collapse>
    </div>
  );
}

export default SurveySection;
