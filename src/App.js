import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import SurveySection from './components/SurveySection';
import Sidebar from './components/Sidebar';

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
  },
  {
    heading: "HPO Processes",
    statements: [
      "In my area of work, priorities are clearly defined.",
      "Processes in my area of work are effective and unbureaucratic.",
      "Processes are designed in a way that allows me to work well and effectively with process partners.",
      "Processes in my area of work are continuously being improved."
    ]
  },
  {
    heading: "HPO Culture",
    statements: [
      "At the BMW Group, I feel that my work is important."
    ]
  },
  {
    heading: "HPO Leader",
    statements: [
      "My manager makes sure everyone works together to achieve the best results.",
      "My manager develops the skills of all team members, regardless of differences in gender, age, professional background, nationality, etc.",
      "I receive praise and appreciative feedback from my manager when I do good work.",
      "My manager is able to inspire me with the ideas and targets of the company."
    ]
  },
  {
    heading: "HPO Team",
    statements: [
      "In my area of work, continuing education and knowledge-sharing ensure that the necessary expertise is available."
    ]
  },
  {
    heading: "Quality",
    statements: [
      "In my area of work, we rely on expert knowledge to ensure the highest quality.",
      "Processes in my area of work are continuously being improved.",
      "In my area of work, mistakes are viewed as an opportunity to learn and improve.",
      "In my area of work, we make sure BMW Group products achieve the highest quality.",
      "In my area of work, decisions and actions are systematically geared toward creating value for internal customers."
    ]
  },
  {
    heading: "Sustainability",
    statements: [
      "In my opinion, the BMW Group accepts its responsibility towards society and considers social matters.",
      "I feel a responsibility to actively contribute to the BMW Group's sustainability goals.",
      "The BMW Group sets itself ambitious environmental and climate-protection goals and acts in accordance with them."
    ]
  },
  {
    heading: "Employee Engagement",
    statements: [
      "I am proud to work for the BMW Group.",
      "I would recommend the BMW Group as an employer.",
      "At the BMW Group, I feel that my work is important."
    ]
  },
  {
    heading: "Health",
    statements: [
      "In my area of work, I can work in a healthy and efficient manner.",
      "At the BMW Group, I feel that my work is important.",
      "My work and private life are well-balanced.",
      "My workload is generally manageable.",
      "Image & Employer Branding",
      "I am proud to work for the BMW Group.",
      "I am optimistic regarding the future of the BMW Group.",
      "I receive appropriate compensation for my work and my performance.",
      "The BMW Group provides very good benefits (social and additional).",
      "In my opinion, the BMW Group accepts its responsibility towards society and considers social matters."
    ]
  },
  {
    heading: "Working Environment",
    statements: [
      "I can participate in decisions relating to my work (e.g. working time, place of work, ways of working).",
      "Conditions in my area of work help me manage my work successfully (e.g. break rooms, areas for concentrated working, cooperation, ergonomics, and indoor climate).",
      "I find the environment at my place of work attractive (e.g. location, accessibility, parking, food services)."
    ]
  },
  {
    heading: "Diversity",
    statements: [
      "My manager develops the skills of all team members, regardless of differences in gender, age, professional background, nationality, etc.",
      "At the BMW Group, a diverse workforce is seen as a strength."
    ]
  },
  {
    heading: "Compliance",
    statements: [
      "At the BMW Group, compliance with laws, internal regulations and compliance provisions play an important role.",
      "Responsible and lawful conduct is modelled and actively promoted by managers.",
      "Follow-up Process",
      "In my area of work, the results of the last Employee Survey were discussed in detail.",
      "In my area of work, concrete measures were developed from the results of the last Employee Survey and implemented."
    ]
  }
];

function App() {
  const [responses, setResponses] = useState([]);
  const [selectedSection, setSelectedSection] = useState(survey[0]);

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
      <div className="row">
        <div className="col-md-3">
          <Sidebar survey={survey} setSelectedSection={setSelectedSection} />
        </div>
        <div className="col-md-9">
          {/* Remove or comment out this line */}
          {/* <h1 className="text-center my-4">Employee Satisfaction Survey</h1> */}
          <form onSubmit={handleSubmit}>
            <SurveySection section={selectedSection} />
            <button type="submit" className="btn btn-primary mt-3">Submit</button>
          </form>
          <h2 className="mt-4">Survey Responses</h2>
          <pre>{JSON.stringify(responses, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
}

export default App;
