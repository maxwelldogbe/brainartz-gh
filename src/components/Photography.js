import ImageSlider from "./Slider";

function Photography() {
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
    margin: "0 auto",
  };

  return (
    <>
      <section className="photography">
        <div className="content">
          <h3>Photography</h3>
          <p>
            Photography is the art of capturing and preserving moments through
            the lens of a camera. Professional photographers use their technical
            skills and artistic vision to create visually stunning images. They
            specialize in various genres, including portrait photography,
            landscape photography, product photography, and event photography.
            If you're looking for professional photographers for a special
            occasion or any specific photography needs, I can assist you in
            finding talented photographers in your area.
          </p>
        </div>
        <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
        {/* <div className="picture">
          <img src="/image/camera.jpg" alt="photograph images" />
        </div> */}
      </section>
      </>
  );
}
export default Photography;
