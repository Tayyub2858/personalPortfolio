export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Tayyab   </p>
          <h4 className="hero--section--title">
           Frontend Developer
          </h4>
          <p className="hero--section-description">
          knowledge of building application with front and back end operations.............
            <br />
            I am develop, user interface and web applications............
            <br />
            I am skilled software developer with experience in JavaScript and expertise in framework like React, Redux, MUI, Tailwind css. I am quick learner and collaborate closely with clints to create efficient, scalable, and user-friendly soluation,
            Let's work together to bring your ideas to life!.
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/Tayyub.png" alt="Tayyub Rafique" />
      </div>
    </section>
  );
}
