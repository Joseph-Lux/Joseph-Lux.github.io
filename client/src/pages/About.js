const About = () => {
  return (
    <div className="page-column">
      <img src="brushes.jpg" width="auto" height="auto" alt="brushes" />
      <div className="about-container">
        <div style={{ marginRight: "30px" }}>
          <div className="header">Meet the Artist</div>
          <div className="paragraph">
            Joseph is a Sacred Artist living in St. Louis, Missouri. He
            graduated from Saint Louis University with a degree in Philosophy.
            For his capstone project, he completed a painting incorporating
            themes from the Philosophical Anthropology of Karol Wojtyla (later
            Pope John Paul II).
          </div>
          <div className="paragraph" style={{ marginTop: "30px" }}>
            He now works full-time on computer programming in order to support
            his fiancée and future family, while studying art, philosophy, and
            theology in his free time. He hopes to contribute to a culture which
            recognizes the true dignity and vocation of the human person
            inscribed in us from "the beginning."
          </div>
        </div>
        <img
          src="/bioPic.jpg"
          alt="Bio Pic"
          style={{ width: "300px", height: "450px" }}
        />
      </div>
      <div className="about-container" style={{ justifyContent: "flex-start" }}>
        <img
          src="/StudioPic.jpg"
          alt="Studio Pic"
          style={{ width: "300px", height: "450px", marginRight: "50px" }}
        />
        <div>
          <div className="header">Selected Works</div>
          <ul className="paragraph works-list">
            <li>
              <i>Sacred Heart</i> -- Oil on Canvas, 18"x24" (2024)
            </li>
            <li>
              <i>Dominus Est</i> -- Interior of St. Joseph's Chapel at Kenrick
              Glennon Seminary -- Oil on Canvas, 18"x24" (2023)
            </li>
            <li>
              <i>Sea of Galilee</i> -- Oil on Canvas, 18"x24" (2023)
            </li>
            <li>
              <i>Blessed Alberto Marvelli</i> -- Graphite on Paper, 11"x14"
              (2023)
            </li>
            <li>
              Study of <i>Immaculate Conception</i> -- From the side altar piece
              at La Chiesa delle Sacre Stimmate di San Francesco -- Watercolor
              on Paper, 17.5"x29" (2023)
            </li>
          </ul>
        </div>
      </div>
      <div className="about-container">
        <div style={{ marginRight: "50px" }}>
          <div className="header">Theology of the Body</div>
          <div className="paragraph">
            Part of Joseph's love for art stems from an understanding of the
            human person grounded in the thought of Pope St. John Paul II.
            Joseph believes that beautiful art is grounded in a complete view of
            the human person, which recognizes our fundamental call to love. You
            can read more about Joseph's thoughts on the intersection of
            Anthropology and art on his blog.
          </div>
          <a
            style={{ width: "7rem", alignSelf: "center", marginTop: "40px" }}
            type="button"
            className="btn btn-outline-secondary"
            href="/Blog"
          >
            Read More
          </a>
        </div>
        <img
          src="/jpii2.jpg"
          style={{ width: "300px", height: "300px", alignSelf: "center" }}
          alt="JPII"
        />
      </div>
    </div>
  );
};

export default About;
