// import Navigation from './components/Navigation'
// import About from './components/About';
// import Service from './components/services';
import SocialConnect from "./components/social";
function App() {
  return (
    <>
      <section className="about">
        <h4>About Us</h4>
        <p>BrainArtz, a registered multifunctional company in the business of general supply. The Company is into the following businesses;
          Textiles & Fashion Designing and Printing
          Graphic Designing and Printing
          Event Planning
          Photography
          Wall Painting / Interior Decoration
          IT Services
          Multimedia and Media Broker Services
          General Trading and Bulk Supply (Textile & Fashion) and many more.
          Our experience in this aspect of our business operations enables us to adapt to our clients’
          needs and provide best quality product at a very competitive and affordable rate with an
          assurance of fast delivery. Guided by our strong belief in customer care and satisfaction, we
          strive to provide healthy, quality, quantity, technologies, dependability, minimum cost
          products or consignments and services to our clients at the right place, right time, and at all
          times.
        </p>
      </section>
      <section className="social-links">
        <SocialConnect />
      </section>
    </>
  );
}

export default App;
