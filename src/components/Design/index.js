import React from "react";
import hikeNowImg from "../../assets/images/hike-now.png";
import bhymwolfImg from "../../assets/images/graphic-design/logos/bhym-wolf.png";
import cassafrasImg from "../../assets/images/graphic-design/logos/cassafras.png";
import creeksideImg from "../../assets/images/graphic-design/logos/creekside.png";
import emeraldCoastImg from "../../assets/images/graphic-design/logos/emerald-coast.png";
import fiestaImg from "../../assets/images/graphic-design/logos/fiesta-at-the-farm.png";
import kohringAcademyImg from "../../assets/images/graphic-design/logos/kohring-academy.png";
import lugoHomesImg from "../../assets/images/graphic-design/logos/lugo-homes.png";
import seekImg from "../../assets/images/graphic-design/logos/seek-impact.png";
import tinyHomeTreatsImg from "../../assets/images/graphic-design/logos/tiny-home-treats.png";
import twowolvesImg from "../../assets/images/graphic-design/logos/two-wolves.png";
import denisImg from "../../assets/images/graphic-design/shirts/denis.png";
import entrenchedImg from "../../assets/images/graphic-design/shirts/entrenched.png";
import greatestShowImg from "../../assets/images/graphic-design/shirts/greatest-show.png";
import hcaImg from "../../assets/images/graphic-design/shirts/hca-2020.png";
import impact2019Img from "../../assets/images/graphic-design/shirts/impact2019.png";
import impact2020Img from "../../assets/images/graphic-design/shirts/impact2020.png";
import impact2021FrontImg from "../../assets/images/graphic-design/shirts/impact2021-front.png";
import impact2021BackImg from "../../assets/images/graphic-design/shirts/impact2021-back.png";
import twowolves2018Img from "../../assets/images/graphic-design/shirts/twowolves2018.png";
import twowolves2019Img from "../../assets/images/graphic-design/shirts/twowolves2019.png";
import wayfindersFrontImg from "../../assets/images/graphic-design/shirts/wayfinders-front.png";
import wayfindersBackImg from "../../assets/images/graphic-design/shirts/wayfinders-back.png";

function Design() {
  return (
    <main>
      <div className="project">
        <section className="projects col-12">
          <div className="section-title d-flex justify-content-center">
            <h1 className="m-5 font-weight-light">GRAPHIC DESIGN</h1>
          </div>

          <div className="mx-5">
            <p>
              Creating graphics has been a passion for Shelby since he was in
              high school. Below you can see a handful of the more recent
              projects he has added to his portfolio, from logos and shirt
              designs, to posters and promtional graphics. Designing for
              organizations such as{" "}
              <a href="http://www.jovenesencamino.org/" target="_blank">
                Jovenes en Camino
              </a>
              ,{" "}
              <a
                href="https://www.lipscomb.edu/about/offices-and-services/spiritual-outreach/impact-2021"
                target="_blank"
              >
                Lipscomb University's IMPACT
              </a>
              , and various other groups and partners nationwide, over the years
              Shelby has continued to learn more about the importance of graphic
              design and the ways it can and needs to grab your attention.
            </p>
          </div>

          {/* LOGOS */}
          <div className="section-title d-flex justify-content-center">
            <h1 className="my-4 font-weight-light">LOGOS</h1>
          </div>

          {/* LOGO LAYOUT */}
          <div className="graphics-container d-flex justify-content-center align-items-center row">
            {/* BYHM LOGO */}
            <div className="col-5 mb-5">
              <img
                className="p-4 w-100 h-auto"
                src={bhymwolfImg}
                alt="Logo for the Burnt Hickory Youth Ministry at Burnt Hickory Church of Christ in Marietta, Georgia"
              />
            </div>

            {/* CASSAFRAS LOGO */}
            <div className="col-5 mb-5">
              <img
                className="p-4 w-100 h-auto"
                src={cassafrasImg}
                alt="Logo for Cassafras, an online boutique based in middle Tennessee operated by Cassie Cauley"
              />
            </div>

            <div className="w-100"></div>

            {/* CREEKSIDE LOGO */}
            <div className="col-5 mb-5">
              <img
                className="p-4 w-100 h-auto"
                src={creeksideImg}
                alt="Logo for Creekside, a venue for gathering in Lebanon, Tennessee"
              />
            </div>

            {/* EMERALD COAST LOGO */}
            <div className="col-5 mb-5">
              <img
                className="p-4 w-100 h-auto"
                src={emeraldCoastImg}
                alt="Logo for the Emerald Coast Grand Hotel, a ficticious hotel for a theater production at Lipscomb University's IMPACT"
              />
            </div>

            <div className="w-100"></div>

            {/* FIESTA AT THE FARM LOGO */}
            <div className="col-5 mb-5">
              <img
                className="p-4 w-100 h-auto"
                src={fiestaImg}
                alt="Logo for Fiesta at the Farm, a benefit of Jovenes en Camino in El Zamorano, Honduras"
              />
            </div>

            {/* KOHRING ACADEMY LOGO */}
            <div className="col-5 mb-5">
              <img
                className="p-4 w-100 h-auto"
                src={kohringAcademyImg}
                alt="Logo for Kohring Academy, a homeschool program for the Kohring family"
              />
            </div>

            <div className="w-100"></div>

            {/* LUGO HOMES LOGO */}
            <div className="col-5 mb-5">
              <img
                className="p-4 w-100 h-auto"
                src={lugoHomesImg}
                alt="Logo for Lugo Hommes, LLC founded by Richy Teixeira"
              />
            </div>

            {/* SEEK IMPACT LOGO */}
            <div className="col-5 mb-5">
              <img
                className="p-3 w-100 h-auto"
                src={seekImg}
                alt="Logo for IMPACT 2017 at Lipscomb Univeristy"
              />
            </div>

            <div className="w-100"></div>

            {/* TINY HOME TREATS LOGO */}
            <div className="col-5 mb-5">
              <img
                className="p-4 w-100 h-auto"
                src={tinyHomeTreatsImg}
                alt="Logo for Tiny Home Treats, a cookie decorating business"
              />
            </div>

            {/* TWO WOLVES LOGO */}
            <div className="col-5 mb-5">
              <img
                className="p-5 w-100 h-auto"
                src={twowolvesImg}
                alt="Two Wolves logo representing the Best Buddies charity at Lipscomb Univeristy's IMPACT"
              />
            </div>
          </div>

          {/* T-SHIRTS */}
          <div className="section-title d-flex justify-content-center">
            <h1 className="my-4 font-weight-light">T-SHIRTS</h1>
          </div>

          {/* T-SHIRT LAYOUT */}
          <div className="graphics-container d-flex justify-content-center align-items-center row">
            
            {/* DENIS T-SHIRT */}
            <div className="col-5 mb-5">
              <img
                className="w-100 h-auto"
                src={denisImg}
                alt="Denis t-shirt"
              />
            </div>

            {/* ENTRENCHED T-SHIRT */}
            <div className="col-5 mb-5">
              <img
                className="w-100 h-auto"
                src={entrenchedImg}
                alt="Entrenched t-shirt"
              />
            </div>

            <div className="w-100"></div>

            {/* GREATEST SHOW T-SHIRT */}
            <div className="col-5 mb-5">
              <img
                className="w-100 h-auto"
                src={greatestShowImg}
                alt="Greatest Show t-shirt"
              />
            </div>

            {/* HCA 2020 T-SHIRT */}
            <div className="col-5 mb-5">
              <img
                className="w-100 h-auto"
                src={hcaImg}
                alt="HCA 2020 t-shirt"
              />
            </div>

            <div className="w-100"></div>

            {/* IMPACT 2019 T-SHIRT */}
            <div className="col-5 mb-5">
              <img
                className="w-100 h-auto"
                src={impact2019Img}
                alt="IMPACT 2019 t-shirt"
              />
            </div>

            {/* IMPACT 2020 T-SHIRT */}
            <div className="col-5 mb-5">
              <img
                className="w-100 h-auto"
                src={impact2020Img}
                alt="IMPACT 2020 t-shirt"
              />
            </div>

            <div className="w-100"></div>

            {/* IMPACT 2021 T-SHIRT--FRONT SIDE */}
            <div className="col-5 mb-5">
              <img
                className="w-100 h-auto"
                src={impact2021FrontImg}
                alt="The front of the IMPACT 2021 t-shirt"
              />
            </div>

            {/* IMPACT 2021 T-SHIRT--BACK SIDE */}
            <div className="col-5 mb-5">
              <img
                className="w-100 h-auto"
                src={impact2021BackImg}
                alt="The back of the IMPACT 2021 t-shirt"
              />
            </div>

            <div className="w-100"></div>

            {/* TWO WOLVES 2018 T-SHIRT */}
            <div className="col-5 mb-5">
              <img
                className="w-100 h-auto"
                src={twowolves2018Img}
                alt="Two Wolves 2018 t-shirt"
              />
            </div>

            {/* TWO WOLVES 2019 T-SHIRT */}
            <div className="col-5 mb-5">
              <img
                className="w-100 h-auto"
                src={twowolves2019Img}
                alt="Two Wolves 2019 t-shirt"
              />
            </div>

            <div className="w-100"></div>

            {/* WAYFINDERS T-SHIRT--FRONT SIDE */}
            <div className="col-5 mb-5">
              <img
                className="w-100 h-auto"
                src={wayfindersFrontImg}
                alt="The front of the Wayfinders t-shirt"
              />
            </div>

            {/* WAYFINDERS T-SHIRT--BACK SIDE */}
            <div className="col-5 mb-5">
              <img
                className="w-100 h-auto"
                src={wayfindersBackImg}
                alt="The back of the Wayfinders t-shirt"
              />
            </div>

            <div className="w-100"></div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Design;
