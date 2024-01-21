import "src/App.css";
import Badges from "src/components/Badge";
import Header from "src/components/Header";
import SkillIcons from "src/components/SkillIcons";
import { BADGES } from "src/shared/badges";
import { SKILLS } from "src/shared/skills";

function Home() {
  return (
    <>
      <div className="card">
        <Header />
        <h4>Contact Me:</h4>
        <Badges badges={BADGES} />
        <h4>Language and Tools I use:</h4>
        <SkillIcons skills={SKILLS} />
      </div>
    </>
  );
}

export default Home;
