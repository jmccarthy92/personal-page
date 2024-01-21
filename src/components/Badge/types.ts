export const BADGES: Record<string, Badge> = {
  linkedIn: {
    path: "LinkedIn-blue",
    logo: "linkedin",
    color: "white",
    url: "https://www.linkedin.com/in/james-mccarthy-9ab411142/",
  },
  email: {
    path: "Email-red",
    logo: "gmail",
    color: "white",
    url: "mailto:jmccarthyns92@gmail.com",
  },
  resume: {
    path: "Resume-blue",
    logo: "download",
    color: "white",
    url: "https://github.com/jmccarthy92/jmccarthy92/raw/main/resume/resume.pdf",
  },
  github: {
    path: "GitHub-black",
    logo: "github",
    color: "white",
    url: "https://github.com/jmccarthy92",
  },
  schedule: {
    path: "Schedule a Chat-yellow",
    logo: "calendar",
    color: "black",
    url: "https://cal.com/jmccarthy92/30min",
  },
};

export interface Badge {
  path: string;
  logo: string;
  color: string;
  url: string;
}
