import About from "./components/About";
import SocialConnect from "./components/social";
import Branding from "./components/Branding";
import Team from "./components/team";
import Software from "./components/Software";
import Textile from "./components/Textile";
import Graphic from "./components/Graphic";
import Photography from "./components/Photography";
import ImageSlider from "./components/Slider";

function App() {

  const slides = [
    { url: "https://brainarzt-gh.web.app/images/software.jpg", title: "beach" },
    { url: "https://brainarzt-gh.web.app/images/coffee.jpg", title: "boat" },
    { url: "https://brainarzt-gh.web.app/images/camera.jpg", title: "forest" },
    { url: "https://brainarzt-gh.web.app/images/people.jpg", title: "city" },
    { url: "https://brainarzt-gh.web.app/images/desk.jpeg", title: "italy" },
  ];
  const containerStyles = {
    width: "80%",
    height: "50vh",
    margin: "auto",
  };

  return (
    <>
      <section className="welcome">
      </section>
      
      <About />

      {/* Services */}
      <Graphic />
      <Branding />
      <Textile />
      <Photography />
      <Software />
      
      {/* image slider */}
      <div style={containerStyles}>
        <h4>Our works</h4>
        <ImageSlider slides={slides} />
      </div>

      {/* Team */}
      <Team />

      <section className="social-links">
        <SocialConnect />
      </section>
    </>
  );
}

export default App;
