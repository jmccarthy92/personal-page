import { Badge } from "./types";

const BADGE_URL = "https://custom-icon-badges.demolab.com/badge/-";

function Badges({ badges }: { badges: Badge[] }) {
  return badges.map((badge) => <Badge badge={badge} />);
}

function Badge({ badge }: { badge: Badge }) {
  return (
    <code>
      <a href={badge.url} target="_blank">
        <img
          src={`${BADGE_URL}${badge.path}?style=for-the-badge&logo=${badge.logo}&logoColor=${badge.color}`}
          aria-label={badge.path}
        />
      </a>
    </code>
  );
}

export default Badges;
