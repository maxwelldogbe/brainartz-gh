// import Navigation from './components/Navigation'
import About from './components/About';
import Section from './components/Section';
import SocialConnect from "./components/social";
import Team from './components/team';
function App() {
  return (
    <>
      <section className="welcome">
        <h3>Welcome to <span>BrainArtz</span></h3>
        <p>You are at the right place to offer your company the best look</p>
        {/* <p>(find creative works)</p> */}
      </section>
        <About />
        <Section />
        <Team />
      <section className="social-links">
        <SocialConnect />
      </section>
    </>
  );
}

export default App;
