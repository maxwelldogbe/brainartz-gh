import ImageSlider from "./Slider";

function Textile() {
  const slides = [
    { url: "https://brainarzt-gh.web.app/images/software.jpg", title: "beach" },
    { url: "https://brainarzt-gh.web.app/images/coffee.jpg", title: "boat" },
    { url: "https://brainarzt-gh.web.app/images/camera.jpg", title: "forest" },
    { url: "https://brainarzt-gh.web.app/images/people.jpg", title: "city" },
    { url: "https://brainarzt-gh.web.app/images/desk.jpeg", title: "italy" },
  ];
  const containerStyles = {
    width: "40%",
    height: "50vh",
  };

  return (
    <>
      <section className="textiles">
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
        <div className="content">
          <h3>Textiles</h3>
          <p>
            Textiles involve the creation and production of fabrics and
            materials used in various applications. This includes designing and
            manufacturing clothing, home furnishings, and accessories. Textile
            designers use their creativity to develop patterns, color schemes,
            and textures that are visually appealing and functional. They may
            work with different techniques such as weaving, knitting, or
            printing to bring their designs to life. If you're looking for
            high-quality fabrics or textile-related services, I can help you
            find reputable suppliers or professionals in this field.
          </p>
          <p>lorem ipsum</p>
        </div>
      </section>
    </>
  );
}
export default Textile;
