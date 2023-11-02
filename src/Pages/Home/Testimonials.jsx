import './Testimonials.css'

export default function Testimonial() {
  return (
    <section className="testimonial--section" id="testimonial">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Resume</p>
          <h2 className="sections--heading">Resume</h2>
        </div>
      </div>
      <div className="portfolio--section--container">
        <div className="testimonial--section--card">
          <div className="testimonial--section--card--review">
            
            <h2 style={{textAlign:"center", justifyContent:"center"}}>Education</h2>
            <ul>
              <br />
              <li>Student at Government college university</li> <br />
              <li>BS In Information Technology (2018 - 2022)</li> <br />
              <li>CGP - 3.46</li>
            </ul>
          </div>
        </div>
        <div className="testimonial--section--card">
          <div className="testimonial--section--card--review">
          <h2 style={{textAlign:"center", justifyContent:"center"}}>Technical Skills</h2>
          <ul> 
            <br />
            <li>HTML, CSS ,Javascript,React,express js</li><br />
            <li>Bootstrap ,Material UI,</li> <br />
            <li>Figma to React js</li> <br />
            <li>Database: #SQL , #MongoDB</li> <br />
            <li>Vs code, Sublime</li>
          </ul>
          </div>
        </div>
        <div className="testimonial--section--card">
          <div className="testimonial--section--card--review">
          <h2 style={{textAlign:"center", justifyContent:"center"}}>Experience</h2>
          <ul>
            <li>Developed and integrated the user interface using React,js.</li><br />
            <li>Worked closely with the Backend team for Api integration at the fronted.</li><br />
            <li>Identified bugs and performance issues in the existing code and suggested possible improvement/solutions for them</li><br />
            <li>Technologies used javascript , React.js, Git, Github, Redux,Node.js, Express,MongoDBm</li><br />
          </ul>
          </div>
        </div>
      </div>
      
    </section>
  );
}
