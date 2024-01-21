import Typewriter from "typewriter-effect";

function Header() {
  return (
    <div style={{ fontSize: "5rem" }}>
      <Typewriter
        options={{
          strings: ["Hi, I'm James.", "I'm a Software Engineer."],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
}

export default Header;
