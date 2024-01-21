export type Skill =
  | "Azure-Dark"
  | "TypeScript"
  | "React-Dark"
  | "PostgreSQL-Dark"
  | "Redux"
  | "VSCode-Dark"
  | "NestJS-Dark"
  | "NodeJS-Dark"
  | "MongoDB"
  | "Linux-Dark"
  | "Java-Dark"
  | "HTML"
  | "CSS"
  | "Maven-Dark"
  | "Git"
  | "ExpressJS-Dark"
  | "Python-Dark"
  | "Docker"
  | "Vite-Dark"
  | "Terraform-Dark"
  | "Figma-Dark"
  | "Github-Dark"
  | "GithubActions-Dark"
  | string;

export interface SkillIconsProps {
  skills: Skill[];
  width?: string;
  height?: string;
}

export interface SkillIconProps {
  skill: Skill;
  width?: string;
  height?: string;
}
