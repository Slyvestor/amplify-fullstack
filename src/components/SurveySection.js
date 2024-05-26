import React from 'react';
import SurveyStatement from './SurveyStatement';

function SurveySection({ section }) {
  return (
    <div className="survey-section">
      <h2>{section.heading}</h2>
      {section.statements.map((statement, index) => (
        <SurveyStatement key={index} statement={statement} />
      ))}
    </div>
  );
}

export default SurveySection;