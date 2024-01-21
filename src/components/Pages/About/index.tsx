import { Avatar } from "@mui/material";
import "src/App.css";
import profilePicture from "/profile-pic.jpg";
import Badges from "src/components/Badge";
import { BADGES } from "src/shared/badges";

function About() {
  return (
    <div
      className="card"
      style={{
        marginTop: "3rem",
      }}
    >
      <Avatar
        sx={{ width: 250, height: 250, margin: "auto" }}
        alt="Profile Picture"
        src={profilePicture}
      />
      <p>
        Greetings, I'm James, a dedicated software engineer based in Queens, New
        York, currently serving as a Lead Backend Engineer at BRKFST.IO. My
        proficiency lies in leveraging TypeScript to craft innovative solutions.
        While my primary focus is on web application development, I find joy in
        programming across diverse platforms. My approach centers on delivering
        simplicity, striving to create user-friendly experiences while
        facilitating developer efficiency.
        <br />
        <br />
        Embracing the wisdom of Robert C. Martin, I believe, "It is not the
        language that makes programs appear simple. It is the programmer that
        makes the language appear simple!" With over 7 years of coding
        experience, I remain committed to continuous learning, maintaining the
        same fervor for growth and exploration since the inception of my coding
        journey.
        <br />
        <br />
        I'm passionate about sharing my knowledge and enthusiasm, so feel free
        to connect with me if you're eager to join the conversation or explore
        new horizons together.
      </p>
      <h4>Contact:</h4>
      <Badges badges={BADGES} />
    </div>
  );
}

export default About;
