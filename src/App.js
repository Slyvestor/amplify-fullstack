import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import SurveySection from './components/SurveySection';

const survey = [
  {
    heading: "HPO Index",
    statements: [
      "There is a good working atmosphere in my area of work.",
      "In my area of work, we discuss different points of view in an open and constructive manner to find the best solution.",
      "In my area of work, continuing education and knowledge-sharing ensure that the necessary expertise is available.",
      "In my area of work, we rely on expert knowledge to ensure the highest quality.",
      "In my area of work, I feel like I am encouraged to share suggestions for improvement and new ideas.",
      "My manager makes sure everyone works together to achieve the best results.",
      "My manager encourages my professional development.",
      "My manager develops the skills of all team members, regardless of differences in gender, age, professional background, nationality, etc.",
      "I receive praise and appreciative feedback from my manager when I do good work.",
      "My manager is able to deal well with criticism and differing opinions.",
      "My manager makes clear decisions and implements them quickly and effectively.",
      "My manager is able to inspire me with the ideas and targets of the company.",
      "In my area of work, we are prepared to deliver and maintain the best performance.",
      "At the BMW Group, I feel that my work is important.",
      "In my area of work more attention is paid to mutual success than to individual benefits.",
      "The five values of the BMW Group are evident in our day-to-day work together.",
      "I fully support the targets and strategy of the BMW Group.",
      "The BMW Group is shaping the future of sustainable mobility in an active and forward-looking way.",
      "I am optimistic regarding the future of the BMW Group.",
      "I have full confidence in the Board of Management of the BMW Group.",
      "In my area of work, decisions and actions are systematically geared toward creating value for BMW Group customers.",
      "In my area of work, we make sure BMW Group products achieve the highest quality.",
    ]
  },
  {
    heading: "HPO Strategy",
    statements: [
      "I fully support the targets and strategy of the BMW Group.",
      "The BMW Group is shaping the future of sustainable mobility in an active and forward-looking way.",
      "I am optimistic regarding the future of the BMW Group.",
      "I have full confidence in the Board of Management of the BMW Group.",
      "In my area of work, decisions and actions are systematically geared toward creating value for BMW Group customers.",
      "In my area of work, we make sure BMW Group products achieve the highest quality.",
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
    <div className="App container-fluid">
      <Header />
      <h1 className="text-center my-4">Employee Satisfaction Survey</h1>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <form onSubmit={handleSubmit}>
            {survey.map((section, index) => (
              <SurveySection key={index} section={section} />
            ))}
            <button type="submit" className="btn btn-primary mt-3">Submit</button>
          </form>
        </div>
      </div>
      <h2 className="mt-4">Survey Responses</h2>
      <pre>{JSON.stringify(responses, null, 2)}</pre>
    </div>
  );
}

export default App;
