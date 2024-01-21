import Typewriter from "typewriter-effect";

function Header() {
  return (
    <div style={{ fontSize: "4rem" }}>
      <Typewriter
        options={{
          strings: ["Hi, I'm James.", "Welcome to my portfolio!"],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
}

export default Header;
