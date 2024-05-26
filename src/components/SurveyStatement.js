import React from 'react';

function SurveyStatement({ statement }) {
  return (
    <div className="survey-statement mb-3">
      <p className="font-weight-bold">{statement}</p>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name={statement} value="Agree" required />
        <label className="form-check-label">Agree</label>
      </div>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name={statement} value="Neutral" required />
        <label className="form-check-label">Neutral</label>
      </div>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name={statement} value="Disagree" required />
        <label className="form-check-label">Disagree</label>
      </div>
    </div>
  );
}

export default SurveyStatement;
