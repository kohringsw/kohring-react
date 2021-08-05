import React from "react";
import moosicImg from "../../assets/images/moosic.png";
import hikeNowImg from "../../assets/images/hike-now.png";
import planItImg from "../../assets/images/simply-plan-it.png";
import bookfastClubImg from "../../assets/images/bookfast-club.png";
import weatherDashboardImg from "../../assets/images/weather-dashboard.png";

function Development() {
  return (
    <main>
      <div>
        <section>
          <div className="webdev d-flex justify-content-center">
            <h1 className="m-5 font-weight-light text-center">
              WEB DEVELOPMENT
            </h1>
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

          {/* HIKE NOW */}
          <div className="mb-5">
            <div className="mt-2">
              <a
                href="https://shelbykohring.github.io/hike-now/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="img img-border w-100 h-auto"
                  src={hikeNowImg}
                  alt="Hike Now landing page"
                />
              </a>

              <div className="webdev-border mx-4">
                <div className="webdev d-flex justify-content-center">
                  <h3 className="mt-4 mb-3 font-weight-light">HIKE NOW</h3>
                </div>

                <div className="webdev mx-4">
                  <p className="text-center">
                    Hike Now is a hiking app to search for the best trails in
                    every state. As a part of this group project, Shelby was the
                    project manager as well as being responsible for the bulk of
                    user interface design and development, using TailwindCSS as
                    the main tool powering the app. Hike Now is also supported
                    by the{" "}
                    <a
                      href="https://www.hikingproject.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Hiking Project API
                    </a>
                    .
                  </p>
                </div>

                <div className="w-100 d-flex justify-content-around pb-5 px-2">
                  <a
                    className="webdev-button text-decoration-none text-light p-3 badge mt-4 col-5"
                    href="https://shelbykohring.github.io/hike-now/"
                    target="_blank "
                    rel="noreferrer"
                  >
                    App Website
                  </a>
                  <a
                    className="webdev-button text-decoration-none text-light p-3 badge mt-4 col-5"
                    href="https://github.com/shelbykohring/hike-now"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* MOOSIC */}
          <div className="mb-5">
            <div className="mt-2">
              <a
                href="https://lit-escarpment-33126.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="img img-border w-100 h-auto"
                  src={moosicImg}
                  alt="Moosic landing page"
                />
              </a>
              <div className="webdev-border mx-4">
                <div className="webdev d-flex justify-content-center">
                  <h3 className="mt-4 mb-3 font-weight-light">MOOSIC</h3>
                </div>

                <div className="webdev mx-4">
                  <p className="text-center">
                    Moosic is a social app for sharing all of the best music
                    that you are currently listening to. Produced as a group
                    project, Moosic had a lot of moving parts. Shelby was mostly
                    responsible for the user interface design and development,
                    depending largely on Bootstrap, but also creating some of
                    his own design, including the app’s logo. Moosic is built
                    with MERN-stack technologies, powered by MongoDB,
                    Express.js, React and Node.js. It also operates using the
                    assistance of{" "}
                    <a
                      href="https://developer.spotify.com/documentation/web-api/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Spotify's Web API
                    </a>{" "}
                    for developers.
                  </p>
                </div>

                <div className="w-100 d-flex justify-content-around pb-5 px-2">
                  <a
                    className="webdev-button text-decoration-none text-light p-3 badge mt-4 col-5"
                    href="https://lit-escarpment-33126.herokuapp.com/"
                    target="_blank "
                    rel="noreferrer"
                  >
                    App Website
                  </a>
                  <a
                    className="webdev-button text-decoration-none text-light p-3 badge mt-4 col-5"
                    href="https://github.com/Ondayko14/Moosic"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* SIMPLY PLAN IT */}
          <div className="mb-5">
            <div className="mt-2">
              <a
                href="https://shelbykohring.github.io/simply-plan-it/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="img img-border w-100 h-auto"
                  src={planItImg}
                  alt="Simply Plan It landing page"
                />
              </a>

              <div className="webdev-border mx-4">
                <div className="webdev d-flex justify-content-center">
                  <h3 className="mt-4 mb-3 font-weight-light">
                    SIMPLY PLAN IT
                  </h3>
                </div>

                <div className="mx-4">
                  <p className="text-center">
                    What design needs do you have for your business or
                    organization? Whether it's a new logo or rebranding an
                    existing one, building a new website or updating what you
                    have now—whatever it is you're looking for—reach out to
                    Shelby for a free quote. Just use the contact form below.
                  </p>
                </div>

                <div className="w-100 d-flex justify-content-around pb-5 px-2">
                  <a
                    className="webdev-button text-decoration-none text-light p-3 badge mt-4 col-5"
                    href="https://shelbykohring.github.io/simply-plan-it/"
                    target="_blank "
                    rel="noreferrer"
                  >
                    App Website
                  </a>
                  <a
                    className="webdev-button text-decoration-none text-light p-3 badge mt-4 col-5"
                    href="https://github.com/shelbykohring/simply-plan-it"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* WEATHER DASHBOARD */}
          <div className="mb-5">
            <div className="mt-2">
              <a
                href="https://shelbykohring.github.io/weather-dashboard/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="img img-border w-100 h-auto"
                  src={weatherDashboardImg}
                  alt="Weather Dashboard landing page"
                />
              </a>

              <div className="webdev-border mx-4">
                <div className="webdev d-flex justify-content-center">
                  <h3 className="mt-4 mb-3 font-weight-light">
                    WEATHER DASHBOARD
                  </h3>
                </div>

                <div className="mx-4">
                  <p className="text-center">
                    What design needs do you have for your business or
                    organization? Whether it's a new logo or rebranding an
                    existing one, building a new website or updating what you
                    have now—whatever it is you're looking for—reach out to
                    Shelby for a free quote. Just use the contact form below.
                  </p>
                </div>

                <div className="w-100 d-flex justify-content-around pb-5 px-2">
                  <a
                    className="webdev-button text-decoration-none text-light p-3 badge mt-4 col-5"
                    href="https://shelbykohring.github.io/weather-dashboard/"
                    target="_blank "
                    rel="noreferrer"
                  >
                    App Website
                  </a>
                  <a
                    className="webdev-button text-decoration-none text-light p-3 badge mt-4 col-5"
                    href="https://github.com/shelbykohring/weather-dashboard"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* THE BOOKFAST CLUB */}
          <div className="mb-5">
            <div className="mt-2">
              <a
                href="https://the-bookfast-club.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="img img-border w-100 h-auto"
                  src={bookfastClubImg}
                  alt="Bookfast Club landing page"
                />
              </a>

              <div className="webdev-border mx-4">
                <div className="webdev d-flex justify-content-center">
                  <h3 className="mt-4 mb-3 font-weight-light">
                    THE BOOKFAST CLUB
                  </h3>
                </div>

                <div className="mx-4">
                  <p className="text-center">
                    What design needs do you have for your business or
                    organization? Whether it's a new logo or rebranding an
                    existing one, building a new website or updating what you
                    have now—whatever it is you're looking for—reach out to
                    Shelby for a free quote. Just use the contact form below.
                  </p>
                </div>

                <div className="w-100 d-flex justify-content-around pb-5 px-2">
                  <a
                    className="webdev-button text-decoration-none text-light p-3 badge mt-4 col-5"
                    href="https://the-bookfast-club.herokuapp.com/"
                    target="_blank "
                    rel="noreferrer"
                  >
                    App Website
                  </a>
                  <a
                    className="webdev-button text-decoration-none text-light p-3 badge mt-4 col-5"
                    href="https://github.com/BeatyPete/the-bookfast-club.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Development;
