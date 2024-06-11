import { heroImage } from "../../assets";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col d-flex flex-column m-auto">
          <h1 className="d-flex text-center">
            Turning Pages: Discover Worlds Within Worlds
          </h1>
          <p>
            Turning Pages: Unveil Worlds, Explore Stories, and Embrace
            Imagination. Where Every Chapter Holds Adventure, Wisdom, and the
            Joy of Discovery.
          </p>
        </div>
        <div className="col p-4">
          <img src={heroImage} className="w-100 h-100" alt="Hero Image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
