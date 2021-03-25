import React from "react";
import hikeNowImg from "../../assets/images/hike-now.png";
import weatherImg from "../../assets/images/weather-dashboard.png";
import planItImg from "../../assets/images/simply-plan-it.png";
import passwordImg from "../../assets/images/password-generator.png";
import noteTakerImg from "../../assets/images/note-taker.png";
import bookfastClubImg from "../../assets/images/bookfast-club.png";

function Projects() {
  return (
    <main>
      <div className="project">
        <section className="projects col-12">
          <div className="section-title">
            <h1 className="m-4 pb-3">Projects</h1>
          </div>

          <div className="container row col-md-9">
            <div className="hike-now row ml-4 mb-5 mt-2">
              <a href="https://kohringsw.github.io/hike-now/" target="_blank" rel="noreferrer">
                <img
                  className="img p-2 d-block w-100 h-auto"
                  src={hikeNowImg}
                  alt="Hike Now landing page"
                />
              </a>
              <a href="https://github.com/kohringsw/hike-now" target="_blank" rel="noreferrer"><h5 className="overlay">HIKE NOW REPO</h5></a>
            </div>
          </div>

          <div className="container row col-md-9">
            <div className="hike-now row ml-4 mb-5 mt-2">
              <a href="https://kohringsw.github.io/weather-dashboard/" target="_blank" rel="noreferrer">
                <img
                  className="img p-2 w-100 d-block h-auto"
                  src={weatherImg}
                  alt="Weather Dashboard landing page"
                />
              </a>
              <a href="https://github.com/kohringsw/weather-dashboard" target="_blank" rel="noreferrer"><h5 className="overlay">WEATHER REPO</h5></a>
            </div>
          </div>

          <div className="container row col-md-9">
            <div className="hike-now row ml-4 mb-5 mt-2">
              <a href="https://kohringsw.github.io/simply-plan-it/" target="_blank" rel="noreferrer">
                <img
                  className="img p-2 w-100 d-block h-auto"
                  src={planItImg}
                  alt="Simply Plan It landing page"
                />
              </a>
              <a href="https://github.com/kohringsw/simply-plan-it" target="_blank" rel="noreferrer"><h5 className="overlay">PLAN IT REPO</h5></a>
            </div>
          </div>

          <div className="container row col-md-9">
            <div className="hike-now row ml-4 mb-5 mt-2">
              <a href="https://kohringsw.github.io/password-generator/" target="_blank" rel="noreferrer">
                <img
                  className="img p-2 w-100 d-block h-auto"
                  src={passwordImg}
                  alt="Password Generator landing page"
                />
              </a>
              <a href="https://github.com/kohringsw/password-generator" target="_blank" rel="noreferrer"><h5 className="overlay">PASSWORD REPO</h5></a>
            </div>
          </div>

          <div className="container row col-md-9">
            <div className="hike-now row ml-4 mb-5 mt-2">
              <a href="https://guarded-hollows-23398.herokuapp.com/" target="_blank" rel="noreferrer">
                <img
                  className="img p-2 w-100 d-block h-auto"
                  src={noteTakerImg}
                  alt="Note Taker landing page"
                />
              </a>
              <a href="https://github.com/kohringsw/note-taker" target="_blank" rel="noreferrer"><h5 className="overlay">NOTE TAKER REPO</h5></a>
            </div>
          </div>

          <div className="container row col-md-9">
            <div className="hike-now row ml-4 mb-5 mt-2">
              <a href="https://the-bookfast-club.herokuapp.com/" target="_blank" rel="noreferrer">
                <img
                  className="img p-2 w-100 d-block h-auto"
                  src={bookfastClubImg}
                  alt="Bookfast Club landing page"
                />
              </a>
              <a href="https://github.com/BeatyPete/the-bookfast-club" target="_blank" rel="noreferrer"><h5 className="overlay">BOOKFAST CLUB REPO</h5></a>
            </div>
          </div>

        </section>
      </div>
    </main>
  );
}

export default Projects;
