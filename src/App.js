import React, { useState } from 'react';
import './App.css';
import SurveySection from './components/SurveySection';

const survey = [
  {
    heading: "Job Satisfaction",
    statements: [
      "I am satisfied with my job.",
      "I find my work challenging.",
      "I feel valued at my job."
    ]
  },
  {
    heading: "Work Environment",
    statements: [
      "My workplace is safe.",
      "I have the tools I need to do my job well.",
      "I feel comfortable at work."
    ]
  }
  // Add more sections and statements as needed
];

function App() {
  const [responses, setResponses] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const newResponses = survey.map(section => ({
      heading: section.heading,
      statements: section.statements.map(statement => ({
        statement,
        response: data.get(statement)
      }))
    }));
    setResponses(newResponses);
    event.target.reset();
  };

  return (
    <div className="App">
      <h1>Employee Satisfaction Survey</h1>
      <form onSubmit={handleSubmit}>
        {survey.map((section, index) => (
          <SurveySection key={index} section={section} />
        ))}
        <button type="submit">Submit</button>
      </form>
      <h2>Survey Responses</h2>
      <pre>{JSON.stringify(responses, null, 2)}</pre>
    </div>
  );
}

export default App;
