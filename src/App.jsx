import "./App.css";
import HeroSection from "./components/Hero-Section/HeroSection";
import AboutMe from "./components/About-ME/AboutMe";
import Skills from "./components/Skills-Section/Skills";
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
      </div>
    </>
  );
}

export default App;
