import { Link } from "react-router-dom";

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
      <Link
        style={{ width: "7rem", alignSelf: "center" }}
        type="button"
        className="btn btn-outline-secondary"
        to="/about"
      >
        Read More
      </Link>
      <div className="link-row">
        <Link
          to="/about"
          className="highlight-image"
          style={{ backgroundImage: "url('images/paletteSquare.png')" }}
        >
          Meet Joseph
        </Link>
        <Link
          to="/gallery"
          className="highlight-image"
          style={{
            backgroundImage: "url('images/Gallery2.jpg')",
          }}
        >
          Browse Gallery
        </Link>
        <Link
          to="/store"
          className="highlight-image"
          style={{
            backgroundImage: "url('product_thumbnails/SeaOfGalileeSquare.jpg')",
          }}
        >
          Shop the Store
        </Link>
      </div>
    </div>
  );
};

export default Home;
