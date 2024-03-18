import "./App.css";
import HeroSection from "./components/Hero-Section/HeroSection";
import AboutMe from "./components/About-ME/AboutMe";
import Skills from "./components/Skills-Section/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
function App() {
  // const handleChangeInput = (event) => {
  //   console.log(event.target.value);
  // };

  return (
    <>
      {/* <hr />
      <input onChange={handleChangeInput} /> */}
      <div>
        <HeroSection/>
        <AboutMe/>
        <Skills/>
        <Portfolio/>
      </div>
    </>
  );
}

export default App;
