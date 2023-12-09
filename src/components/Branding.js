import ImageSlider from "./Slider";

function Branding() {
  const slides = [
    { url: "https://brainarzt-gh.web.app/images/software.jpg", title: "beach" },
    { url: "https://brainarzt-gh.web.app/images/coffee.jpg", title: "boat" },
    { url: "https://brainarzt-gh.web.app/images/camera.jpg", title: "forest" },
    { url: "https://brainarzt-gh.web.app/images/people.jpg", title: "city" },
    { url: "https://brainarzt-gh.web.app/images/desk.jpeg", title: "italy" },
  ];
  const containerStyles = {
    width: "40%",
    height: "auto",
    margin: "0 auto",
  };

  return (
    <>
      <section className="branding">
        <div className="content">
          <h3>Branding</h3>
          <p>
            Branding encompasses the process of creating and managing a
            company's brand image. It involves establishing a unique identity,
            values, and personality that resonate with the target audience.
            Branding professionals work on designing logos, defining brand
            guidelines, developing marketing strategies, and creating a cohesive
            brand experience across different channels. If you are looking to
            enhance your brand or develop a new brand identity, I can help you
            find branding agencies or experts who can assist you in creating a
            strong and memorable brand.
          </p>
        </div>
        <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
        {/* <div className="picture">
          <img src="/images/branding1.png" alt="textile images" />
        </div> */}
      </section>
      
      {/* </section> */}
    </>
  );
}
export default Branding;
