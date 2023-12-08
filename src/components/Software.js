import ImageSlider from "./Slider";

function Software() {
  const slides = [
    { url: "http://localhost:3000/images/software.jpg", title: "beach" },
    { url: "http://localhost:3000/images/coffee.jpg", title: "boat" },
    { url: "http://localhost:3000/images/camera.jpg", title: "forest" },
    { url: "http://localhost:3000/images/people.jpg", title: "city" },
    { url: "http://localhost:3000/images/desk.jpeg", title: "italy" },
  ];
  const containerStyles = {
    width: "40%",
    height: "50vh",
    margin: "0 auto",
  };

  return (
    <>
      <section className="software">
        <div className="content">
          <h3>Web Developer</h3>
          <p>
            Web development involves creating and maintaining websites. Web
            developers are skilled in programming languages such as HTML, CSS,
            and JavaScript, and use various frameworks and tools to build
            functional and visually engaging websites. They work on tasks like
            front-end development (user interface design), back-end development
            (server-side programming), database management, and website
            optimization. Whether you need a new website built from scratch or
            assistance with website updates and maintenance, I can help you find
            experienced web developers or web development services.
          </p>
        </div>
        <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
      </section>
    </>
  );
}
export default Software;
