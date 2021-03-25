import React from "react";
import coverImage from "../../assets/images/kohr-development-hero.jpg";

function About() {
  return (
    <section className="col-12">
      <h1 className="about m-4 pb-3"id="about">About Me</h1>
      <img
        src={coverImage}
        alt="Shelby Kohring profile"
        className="about-img ml-4 mt-2 p-2"
      />
      <div className="my-4 ml-4 mr-5">
        <p>
          Shelby was born and raised in Knoxville, Tennessee. He went to college
          at Lipscomb University from 2003-2007, where he received a Bachelor of
          Arts degree. He graduated in December of 2007 and spent 13 years in
          student ministry. While working on staff at three different churches
          during that time, he developed a professional skillset in relational
          team-building, communications, and presentations with a specific focus
          on graphic design.
        </p>
        <p>
          He is married to his beautiful wife, Jessi. They have three amazing
          kids, Ezra Kate, Eli Reese, and Knox. They currently live in Bethpage,
          Tennessee where they love to play outside, read fun books, watch
          movies together, and dream about when their next trip to Honduras will
          be.
        </p>
        <p>
          Shelby excels in design and development seeking to increase experience
          as a web developer, implementing different coding languages with a
          desire to help businesses and organizations better represent their
          brands online. His greatest hope professionally is to work on projects
          for companies and organizations that love and care about people.
          Long-term he would like to use what he learns on his journey to teach
          men and women in different parts of the world to help break
          multi-generational cycles of poverty.
        </p>
      </div>
    </section>
  );
}

export default About;
