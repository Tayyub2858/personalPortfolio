export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/Tayyub.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            Full stack web with background knowledge of React js, Next.js Frontend  with redux, along with a knack of building applications with utmost efficiency.
            <br />
            <br />
            Here are a Few Highlights:
            <ul>
              <li> Frontend Developer</li>
              <li> React Js  Developer</li>
              <li>Design the user interface for the application</li>
              <li>Implement the front-end using React and React.js</li>
              <li>Utilize Redux for state management</li>
              <li>Create RESTful APIs for communication with the backend</li>
            </ul>
          </p>
          <p className="hero--section-description"></p>
        </div>
      </div>
    </section>
  );
}
