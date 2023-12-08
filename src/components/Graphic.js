import ImageSlider from "./Slider";

function Graphic() {
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
  };
  return (
    <>
      <section className="graphic">
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
        <div className="content">
          <h3>Graphic Design</h3>
          <p>
            Graphic designing is a creative field that focuses on visual
            communication. Graphic designers use their skills to create visually
            appealing designs for print and digital media. They combine elements
            such as typography, images, illustrations, and colors to convey a
            message or create a specific mood. Graphic designers can work on
            various projects, including logo design, branding, marketing
            materials, website graphics, and more. If you need professional
            graphic design services, I can assist you in finding talented
            designers or design agencies.
          </p>
        </div>
      </section>
      
    </>
  );
}
export default Graphic;
