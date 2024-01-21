import "src/App.css";
import Badges from "src/components/Badge";
import { BADGES } from "src/components/Badge/types";
import Header from "src/components/Header";
import SkillIcons from "src/components/SkillIcons";
import { Skill } from "src/components/SkillIcons/types";

const SKILLS: Skill[] = [
  "Azure-Dark",
  "TypeScript",
  "React-Dark",
  "Docker",
  "ExpressJS-Dark",
  "Git",
  "HTML",
  "CSS",
  "Java-Dark",
  "MongoDB",
  "Linux-Dark",
  "Redux",
  "Maven-Dark",
  "VSCode-Dark",
  "PostgreSQL-Dark",
  "NodeJS-Dark",
  "NestJS-Dark",
  "Python-Dark",
  "Vite-Dark",
  "Terraform-Dark",
  "Figma-Dark",
  "Github-Dark",
  "GithubActions-Dark",
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
