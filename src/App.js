// import Navigation from './components/Navigation'
import About from './components/About';
import ServiceSection from './components/services'; 
import SocialConnect from "./components/social";
import Team from './components/team';
function App() {
  return (
    <>
      <section className="welcome">
        <h3>Welcome to <span>BrainArtz</span></h3>
        {/* <p>(find creative works)</p> */}
      </section>
        <About />
        <ServiceSection />
        <Team />
      <section className="social-links">
        <SocialConnect />
      </section>
    </>
  );
}

export default App;