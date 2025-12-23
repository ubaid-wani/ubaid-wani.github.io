import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <>
      <Typewriter
        options={{
          strings: [
            "Software Developer",
            "Full-Stack Engineer",
            "React.js Developer",
            "UI/UX Enthusiast",
            "Freelancer",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </>
  );
}

export default Type;
