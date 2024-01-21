import "src/App.css";
import { SkillIconProps, SkillIconsProps } from "./types";

const ICON_URL =
  "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/";

const DEFAULT_WIDTH = "50px";
const DEFAULT_HEIGHT = "50px";

function SkillIcons({
  skills,
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
}: SkillIconsProps) {
  return skills.map((skill) => (
    <SkillIcon skill={skill} width={width} height={height} />
  ));
}

function SkillIcon({
  skill,
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
}: SkillIconProps) {
  return (
    <code>
      <img
        src={`${ICON_URL}${skill}.svg`}
        aria-label={skill}
        width={width}
        height={height}
      />
    </code>
  );
}

export default SkillIcons;
