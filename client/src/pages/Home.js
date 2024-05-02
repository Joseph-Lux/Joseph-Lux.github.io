const Home = () => {
  return (
    <div className="page-column">
      <div className="sacred" />
      <text
        style={{ padding: "50px", textAlign: "center" }}
        className="paragraph"
      >
        Joseph Lux is a sacred artist exploring the integration of the Western
        Christian tradition with the philosophical and theological anthropology
        of John Paul II.
      </text>
      <a
        style={{ width: "7rem", alignSelf: "center" }}
        type="button"
        className="btn btn-outline-secondary"
        href="/About"
      >
        Read More
      </a>
      <div className="link-row">
        <a
          href="/About"
          className="highlight-image"
          style={{ backgroundImage: "url('images/paletteSquare.png')" }}
        >
          Meet Joseph
        </a>
        <a
          href="/Gallery"
          className="highlight-image"
          style={{
            backgroundImage: "url('images/Gallery2.jpg')",
          }}
        >
          Browse Gallery
        </a>
        <a
          href="/Store"
          className="highlight-image"
          style={{ backgroundImage: "url('images/SacredHeartSquare.jpg')" }}
        >
          Shop the Store
        </a>
      </div>
    </div>
  );
};

export default Home;
