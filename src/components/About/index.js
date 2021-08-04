import React from "react";
import coverImage from "../../assets/images/shelby-kohring-profile.jpg";

function About() {
  return (
    <section>
      <img
        src={coverImage}
        alt="Shelby Kohring profile"
        className="about-img"
      />
      <div className="m-5">
        <p>
          SK Designs is a free lance graphic design and web development company
          operated by Shelby Kohring.
        </p>
        <p>
          Shelby was born and raised in Knoxville, Tennessee. He went to college
          at Lipscomb University from 2003-2007, where he received a Bachelor of
          Arts degree. He graduated in December of 2007 and spent 13 years as a
          student pastor. During his time on staff with three different
          churches, he developed a professional skillset in relational
          team-building, communications, public speaking and presentations, and
          graphic design.
        </p>
        <p>
          He is married to his beautiful wife, Jessi. They have three amazing
          kids: Ezra Kate, Eli Reese, and Knox. They currently live in Bethpage,
          Tennessee, where they love to play outside, read fun books, watch
          movies together, and dream about their next trip to Honduras.
        </p>
        <p>
          This year, Shelby graduated from Vanderbilt University’s Coding
          Bootcamp, earning a Full Stack Web Development certificate. With this,
          he is hopeful to use his skills as a graphic designer and increase his
          knowledge and expertise in web development to help businesses and
          organizations better represent their brands online. His greatest hope
          professionally is to work on projects for companies and organizations
          that love and care about people. Long-term, he would like to use
          everything he learns on his journey to teach men and women in
          different parts of the world to help break multi-generational cycles
          of poverty.
        </p>
      </div>
    </section>
  );
}

export default About;
