import React from "react";
import moosicImg from "../../assets/images/moosic.png";
import hikeNowImg from "../../assets/images/hike-now.png";
import planItImg from "../../assets/images/simply-plan-it.png";
import bookfastClubImg from "../../assets/images/bookfast-club.png";
import weatherDashboardImg from "../../assets/images/weather-dashboard.png";

function Development() {
  return (
    <main>
      <div className="project">
        <section className="projects col-12">
          <div className="webdev d-flex justify-content-center">
            <h1 className="m-5 font-weight-light">WEB DEVELOPMENT</h1>
          </div>

          <div className="webdev mb-5 mx-5">
            <p>
              Below are a few of the development projects Shelby produced
              through the Coding Bootcamp with Vanderbilt. To learn more about
              these apps use the buttons under the images to navigate to the app
              website or the GitHub repository. You can also visit{" "}
              <a
                href="https://github.com/shelbykohring"
                target="_blank"
                rel="noreferrer"
              >
                Shelby's GitHub profile
              </a>{" "}
              to see more of his web development work.
            </p>
          </div>

          <div className="d-flex justify-content-center mb-5">
            <div className="mx-5 mt-2">
              <a
                href="https://shelbykohring.github.io/hike-now/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="img p-2 d-block w-100 h-auto"
                  src={hikeNowImg}
                  alt="Hike Now landing page"
                />
              </a>
              <div className="button-container w-100 row justify-content-around ml-1 mr-1">
                <a
                  className="button text-decoration-none text-light p-3 badge mt-4 col-5"
                  href="https://shelbykohring.github.io/hike-now/"
                  target="_blank "
                  rel="noreferrer"
                >
                  App Website
                </a>
                <a
                  className="button text-decoration-none text-light p-3 badge mt-4 col-5"
                  href="https://github.com/shelbykohring/hike-now"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center mb-5">
            <div className="mx-5 mt-2">
              <a
                href="https://lit-escarpment-33126.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="img p-2 d-block w-100 h-auto"
                  src={moosicImg}
                  alt="Hike Now landing page"
                />
              </a>
              <div className="button-container w-100 row justify-content-around ml-1 mr-1">
                <a
                  className="button text-decoration-none text-light p-3 badge mt-4 col-5"
                  href="https://lit-escarpment-33126.herokuapp.com/"
                  target="_blank "
                  rel="noreferrer"
                >
                  App Website
                </a>
                <a
                  className="button text-decoration-none text-light p-3 badge mt-4 col-5"
                  href="https://github.com/Ondayko14/Moosic"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center mb-5">
            <div className="mx-5 mt-2">
              <a
                href="https://shelbykohring.github.io/simply-plan-it/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="img p-2 w-100 d-block h-auto"
                  src={planItImg}
                  alt="Simply Plan It landing page"
                />
              </a>
              <div className="button-container w-100 row justify-content-around ml-1 mr-1">
                <a
                  className="button text-decoration-none text-light p-3 badge mt-4 col-5"
                  href="https://shelbykohring.github.io/simply-plan-it/"
                  target="_blank "
                  rel="noreferrer"
                >
                  App Website
                </a>
                <a
                  className="button text-decoration-none text-light p-3 badge mt-4 col-5"
                  href="https://github.com/shelbykohring/simply-plan-it"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center mb-5">
            <div className="mx-5 mt-2">
              <a
                href="https://shelbykohring.github.io/weather-dashboard/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="img p-2 w-100 d-block h-auto"
                  src={weatherDashboardImg}
                  alt="Weather Dashboard landing page"
                />
              </a>
              <div className="button-container w-100 row justify-content-around ml-1 mr-1">
                <a
                  className="button text-decoration-none text-light p-3 badge mt-4 col-5"
                  href="https://shelbykohring.github.io/weather-dashboard/"
                  target="_blank "
                  rel="noreferrer"
                >
                  App Website
                </a>
                <a
                  className="button text-decoration-none text-light p-3 badge mt-4 col-5"
                  href="https://github.com/shelbykohring/weather-dashboard"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center mb-5">
            <div className="mx-5 mt-2">
              <a
                href="https://the-bookfast-club.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="img p-2 w-100 d-block h-auto"
                  src={bookfastClubImg}
                  alt="Bookfast Club landing page"
                />
              </a>
              <div className="button-container w-100 row justify-content-around ml-1 mr-1">
                <a
                  className="button text-decoration-none text-light p-3 badge mt-4 col-5"
                  href="https://the-bookfast-club.herokuapp.com/"
                  target="_blank "
                  rel="noreferrer"
                >
                  App Website
                </a>
                <a
                  className="button text-decoration-none text-light p-3 badge mt-4 col-5"
                  href="https://github.com/BeatyPete/the-bookfast-club.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Development;
