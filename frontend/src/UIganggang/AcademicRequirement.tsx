import React, { useState } from "react";
import "./AcademicRequirement.css";

const requirements = {
  Math: [
    "MATH 131: Calculus I",
    "MATH 132: Calculus II",
    "MATH 233 or STAT 515: Multivariate Calc or Stats I",
    "MATH 235: Linear Algebra",
  ],
  LifeScience: [
    "CHEM 111 (or 121) & CHEM 112 (or 122)",
    "GEOL 101/lab (or 103/131, or 105/131)",
    "PHYSIC 151 (or 181) & PHYSIC 152 (or 182)",
  ],
  csIntro: ["CICS 110: Foundations of Prog.", "CICS 160: Object-Oriented Prog.", "CICS 210: Data Structures"],
  csCore: ["COMPSCI 220: Programming Methodology", "COMPSCI 230: Computer Systems", "COMPSCI 240: Reasoning", "COMPSCI 250: Computation"],
  upper_cs: [
    "COMPSCI 311: Algorithms",
    "CS 300+ (IE 320 or 326)",
    "CS 300+",
    "CS 300+",
    "CS 400+",
    "CS 400+",
    "CS 400+",
    "CS 300+/Approved Elective",
  ],
  JuniorWriting: ["COMPSCI 305: Social Issues in Computing"],
  IntegrativeExperience: ["COMPSCI 320: Software Engineering or COMPSCI 326: Web Programming"],
};

const AcademicRequirements: React.FC = () => {
  const [checked, setChecked] = useState<{ [key: string]: boolean }>({});
  const [submitted, setSubmitted] = useState(false);

  const toggleCheck = (req: string) => {
    setChecked((prev) => ({ ...prev, [req]: !prev[req] }));
  };

  const handleSubmit = () => {
    const completed = Object.keys(checked).filter((req) => checked[req]);
    const notCompleted = Object.keys(requirements)
      .flatMap((category) => requirements[category as keyof typeof requirements])
      .filter((req) => !checked[req]);

    const summary = {
      completed,
      notCompleted,
    };

    console.log("Submitting JSON:", JSON.stringify(summary, null, 2));
    setSubmitted(true);
  };

  return (
    <div className="container">
      <h1>Academic Requirements</h1>
      {Object.entries(requirements).map(([category, reqs]) => (
        <div key={category} className="category">
          <h2>{category.replace(/([A-Z])/g, " $1").trim()}</h2>
          {reqs.map((req) => (
            <label key={req} className="requirement">
              <input type="checkbox" checked={!!checked[req]} onChange={() => toggleCheck(req)} />
              {req}
            </label>
          ))}
        </div>
      ))}
      <button
        className="submit-btn"
        onClick={handleSubmit}
        disabled={Object.keys(checked).length < Object.values(requirements).flat().length}
      >
        Submit
      </button>
      {submitted && <p className="success">Requirements submitted! Chatbot will analyze your needs.</p>}
    </div>
  );
};

export default AcademicRequirements;
