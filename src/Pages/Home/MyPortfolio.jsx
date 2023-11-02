import { Link } from "react-router-dom";

export default function MyPortfolio() {
  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Recent My Work Demo</p>
          <h2 className="section--heading">My Projects In Intership</h2>
        </div>
        <div>
          <Link  to='https://github.com'  className="btn btn-github">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 33 33"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.3333 0.166748C7.50028 0.166748 0.333252 7.33378 0.333252 16.1667C0.333252 24.9997 7.50028 32.1667 16.3333 32.1667C25.1489 32.1667 32.3333 24.9997 32.3333 16.1667C32.3333 7.33378 25.1489 0.166748 16.3333 0.166748ZM26.9016 7.54202C28.8105 9.8674 29.9559 12.8348 29.9906 16.0452C29.5394 15.9585 25.0274 15.0387 20.4808 15.6114C20.3767 15.3858 20.2899 15.1428 20.1858 14.8999C19.9081 14.2405 19.5958 13.5637 19.2834 12.9216C24.3159 10.8739 26.6066 7.9238 26.9016 7.54202ZM16.3333 2.52684C19.804 2.52684 22.9797 3.82836 25.3919 5.96285C25.1489 6.30992 23.0838 9.06914 18.2248 10.8912C15.9862 6.77846 13.5047 3.41187 13.1229 2.89126C14.1467 2.64831 15.2227 2.52684 16.3333 2.52684ZM10.5199 3.811C10.8843 4.2969 13.3138 7.68085 15.5871 11.7068C9.20093 13.4075 3.56102 13.3728 2.95364 13.3728C3.83867 9.13855 6.70201 5.61577 10.5199 3.811ZM2.65863 16.1841C2.65863 16.0452 2.65863 15.9064 2.65863 15.7676C3.24865 15.7849 9.87772 15.8717 16.6977 13.824C17.0969 14.5875 17.4613 15.3684 17.8084 16.1493C17.6348 16.2014 17.4439 16.2535 17.2704 16.3055C10.2248 18.5788 6.47642 24.7914 6.16405 25.312C3.99485 22.8999 2.65863 19.6895 2.65863 16.1841ZM16.3333 29.8413C13.1749 29.8413 10.2595 28.7654 7.95147 26.9606C8.19442 26.4574 10.971 21.1125 18.676 18.4227C18.7107 18.4053 18.7281 18.4053 18.7628 18.388C20.689 23.3684 21.47 27.5506 21.6782 28.748C20.0296 29.4595 18.2248 29.8413 16.3333 29.8413ZM23.9515 27.4986C23.8127 26.6656 23.0838 22.6743 21.2964 17.7632C25.5828 17.0864 29.3311 18.1971 29.7997 18.3533C29.2097 22.1537 27.0231 25.4335 23.9515 27.4986Z"
                fill="currentColor"
              />
            </svg>
            Visit My GitHub
          </Link>

        </div>
      </div> 
      <p className="text-md" style={{fontSize:'20px'}}>Following projects showcases my skills and experience through real-wrok example of my work. <br />
        Each project is briefly described with links to code repositories and live demos in it. <br />
        it reflects my ability to slove complex problems, work with different technologies, <br /> and manage projects effectively.
        </p>  
      <div className="portfolio--section--container">

        <div className="portfolio--section--card">
          <div className="portfolio--section--img">
            <img src='./img/ecommerce.png' alt="Placeholder" />
          </div>
          <div className="portfolio--section--card--content">
            <div>
              <h3 className="portfolio--section--title">Ecommerce Marketplace</h3>
              <p className="text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique</p>
            </div>
            <div style={{ display: 'flex', width: '100%' }}>
              <Link to='https://github.com' className="text-sm portfolio--link">
                View In Github
                <svg
                  xmlns="http://www.w3.org/2000/svg" f
                  width="16"
                  height="16"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <path
                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                    stroke="currentColor"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Link>
              <Link to='https://ecom-marketplace.netlify.app' className="Demo-btn">Live Demo</Link>
            </div>
          </div>
        </div>
        <div className="portfolio--section--card">
          <div className="portfolio--section--img">
            <img src='./img/download.png' alt="Placeholder" style={{ height: "270px" }} />
          </div>
          <div className="portfolio--section--card--content">
            <div>
              <h3 className="portfolio--section--title">LERNING MANAGMENT SYSTEM</h3>
              <p className="text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique</p>
            </div>
            <div style={{ display: 'flex', width: '100%' }}>
              <Link to='https://github.com/Tayyub2858/Brain-LMS' className="text-sm portfolio--link">
                View In Github
                <svg
                  xmlns="http://www.w3.org/2000/svg" f
                  width="16"
                  height="16"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <path
                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                    stroke="currentColor"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Link>
              <Link to='https://frabjous-cranachan-6def69.netlify.app' className="Demo-btn">Live Demo</Link>
            </div>
          </div>
        </div>

        <div className="portfolio--section--card">
          <div className="portfolio--section--img">
            <img src='./img/shoes.webp' alt="Placeholder" style={{ height: "270px" }} />
          </div>
          <div className="portfolio--section--card--content">
            <div>
              <h3 className="portfolio--section--title">Shoe APP</h3>
              <p className="text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique</p>
            </div>
            <div style={{ display: 'flex', width: '100%' }}>
              <Link to='https://github.com' className="text-sm portfolio--link">
                View In Github
                <svg
                  xmlns="http://www.w3.org/2000/svg" f
                  width="16"
                  height="16"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <path
                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                    stroke="currentColor"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Link>
              <Link to='https://ecommerce-new-app.netlify.app' className="Demo-btn">Live Demo</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio--section--container">

        <div className="portfolio--section--card">
          <div className="portfolio--section--img">
            <img src='./img/expence.jpg' alt="Placeholder" style={{ height: "270px" }} />
          </div>
          <div className="portfolio--section--card--content">
            <div>
              <h3 className="portfolio--section--title">Expence Tracker App</h3>
              <p className="text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique</p>
            </div>
            <div style={{ display: 'flex', width: '100%' }}>
              <Link to='https://github.com/Tayyub2858/Expence-app' className="text-sm portfolio--link">
                View In Github
                <svg
                  xmlns="http://www.w3.org/2000/svg" f
                  width="16"
                  height="16"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <path
                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                    stroke="currentColor"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Link>
              <Link to='https://majestic-otter-0df856.netlify.app' className="Demo-btn">Live Demo</Link>
            </div>
          </div>
        </div>
        
        <div className="portfolio--section--card">
          <div className="portfolio--section--img">
            <img src='./img/Quiz-App-01.png' alt="Placeholder" style={{ height: "270px" }} />
          </div>
          <div className="portfolio--section--card--content">
            <div>
              <h3 className="portfolio--section--title">Quiz App</h3>
              <p className="text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique</p>
            </div>
            <div style={{ display: 'flex', width: '100%' }}>
              <Link to='https://github.com/Tayyub2858/Quiz-app' className="text-sm portfolio--link">
                View In Github
                <svg
                  xmlns="http://www.w3.org/2000/svg" f
                  width="16"
                  height="16"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <path
                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                    stroke="currentColor"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Link>
              <Link to='https://glistening-cheesecake-746b8f.netlify.app' className="Demo-btn">Live Demo</Link>
            </div>
          </div>
        </div>
        <div className="portfolio--section--card">
          <div className="portfolio--section--img">
            <img src='./img/figma.png' alt="Placeholder" style={{ height: "270px" }} />
          </div>
          <div className="portfolio--section--card--content">
            <div>
              <h3 className="portfolio--section--title">Figma to React</h3>
              <p className="text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique</p>
            </div>
            <div style={{ display: 'flex', width: '100%' }}>
              <Link to='https://github.com/Tayyub2858/figma-to-react' className="text-sm portfolio--link">
                View In Github
                <svg
                  xmlns="http://www.w3.org/2000/svg" f
                  width="16"
                  height="16"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <path
                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                    stroke="currentColor"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Link>
              <Link to='https://phenomenal-figolla-d190fa.netlify.app' className="Demo-btn">Live Demo</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
