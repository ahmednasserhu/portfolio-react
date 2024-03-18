import SingleSkill from "../Single-Skill/SIngleSkill";
import ActionAreaProgressBar from "../../reusable-component/progress-bar/ProgressBar";
import './Skills.css'

const Skills = () => {
  return (
    <div className="skills-section"> {/* Apply the skills-section class */}
      <div className="skill-list">
        <h1>Skills</h1>
        <ActionAreaProgressBar
          renderContent={<SingleSkill progressRate='80' skillName="JAVA"/>}
        />
        <ActionAreaProgressBar
          renderContent={<SingleSkill progressRate='75' skillName="PYTHON"/>}
        />
        <ActionAreaProgressBar
          renderContent={<SingleSkill progressRate='70' skillName="HTML"/>}
        />
        <ActionAreaProgressBar
          renderContent={<SingleSkill progressRate='70' skillName="JAVASCRIPT"/>}
        />
      </div>
      <div className='myInterests'>
        <h3>My Interests</h3>
        <hr />
        <ul id="interestsList">
          <li className="interestsItems">Front end development</li>
          <li className="interestsItems">Back end development</li>
          <li className="interestsItems">UI/UX</li>
          <li className="interestsItems">Web Design</li>
          <li className="interestsItems">Machine learning</li>
          <li className="interestsItems">Natural Language processing</li>
          <li className="interestsItems">Computer Vision</li>
          <li className="interestsItems">Mobile App Design</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
