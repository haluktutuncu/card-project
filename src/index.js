import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="watsap.jpeg" alt="pp"></img>;
}
function Intro() {
  return (
    <div>
      <h1>Haluk Tutuncu</h1>
      <p>
        Front-End Developer and part-time lawyer. When not coding, I like to
        travel and spend time with my friends.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="♥️" color="blue" />
      <Skill skill="HTML+CSS" emoji="💭" color="red" />
      <Skill skill="Javascript" emoji="🕙" color="#123456" />
    </div>
  );
}

function Skill(props) {
  return (
    <div
      className="skill"
      style={{ backgroundColor: props.color, color: "white" }}
    >
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
