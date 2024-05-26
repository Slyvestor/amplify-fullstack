import React from 'react';

function SurveyStatement({ statement }) {
  return (
    <div className="survey-statement">
      <p>{statement}</p>
      <label>
        <input type="radio" name={statement} value="Agree" required /> Agree
      </label>
      <label>
        <input type="radio" name={statement} value="Neutral" required /> Neutral
      </label>
      <label>
        <input type="radio" name={statement} value="Disagree" required /> Disagree
      </label>
    </div>
  );
}

export default SurveyStatement;
