import "src/App.css";
import Badges from "src/components/Badge";
import { BADGES } from "src/components/Badge/types";
import Header from "src/components/Header";
import SkillIcons from "src/components/SkillIcons";
import { Skill } from "src/components/SkillIcons/types";

const SKILLS: Skill[] = [
  "TypeScript",
  "React-Dark",
  "Redux",
  "Vite-Dark",
  "NodeJS-Dark",
  "NestJS-Dark",
  "ExpressJS-Dark",
  "MongoDB",
  "HTML",
  "CSS",
  "Azure-Dark",
  "Terraform-Dark",
  "Docker",
  "PostgreSQL-Dark",
  "Git",
  "Github-Dark",
  "GithubActions-Dark",
  "Java-Dark",
  "Maven-Dark",
  "Python-Dark",
  "Linux-Dark",
  "VSCode-Dark",
  "Figma-Dark",
];

const badges = [
  BADGES.linkedIn,
  BADGES.github,
  BADGES.email,
  BADGES.resume,
  BADGES.schedule,
];

function Home() {
  return (
    <>
      <div className="card">
        <Header />
        <h4>Contact Me:</h4>
        <Badges badges={badges} />
        <h4>Language and Tools I use:</h4>
        <SkillIcons skills={SKILLS} />
      </div>
    </>
  );
}

export default Home;
