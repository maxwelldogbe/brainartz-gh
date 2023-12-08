// import Navigation from './components/Navigation'
import About from './components/About';
// import Section from './components/Section';
import SocialConnect from "./components/social";
import Branding from "./components/Branding"
import Team from './components/team';
import Software from './components/Software';
import Textile from './components/Textile';
import Graphic from './components/Graphic';
import Photography from './components/Photography';
function App() {
  return (
    <>
      <section className="welcome">
        <h3>Welcome to <span>BrainArtz</span></h3>
        <p>You are at the right place to offer your company the best look</p>
        {/* <p>(find creative works)</p> */}
      </section>
        <About />
        {/* <Section /> */}
        <Graphic />
        <Branding />
        <Textile />
        <Photography />
        <Software />
        <Team />
      <section className="social-links">
        <SocialConnect />
      </section>
    </>
  );
}

export default App;
