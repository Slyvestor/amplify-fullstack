import React from 'react';
import SurveyStatement from './SurveyStatement';

function SurveySection({ section }) {
  return (
    <div className="survey-section mb-4">
      <h2 className="h4 mb-3">{section.heading}</h2>
      <div>
        {section.statements.map((statement, index) => (
          <SurveyStatement key={index} statement={statement} />
        ))}
      </div>
    </div>
  );
}

export default SurveySection;
