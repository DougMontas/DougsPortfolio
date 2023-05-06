import "./App.css";
import Name from "./components/Name";
import MainPicture from "./components/MainPicture";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import ContactMe from "./components/ContactMe";
import Testimonials from "./components/Testimonials";
import About from "./components/About";



function App() {
  window.onload = () => {
    document.getElementById("hideLeft").id = "name";
    document.getElementById("hidemainpicture").id = "mainpicture";
    document.getElementById("hideRight").id = "picture";
  };

  return (
    <>
    <div className="bg-[url('/src/assets/cool-background.png')] bg-auto">
      <Navbar />
      <Name />
      <MainPicture />
      <About />
      <Skills />
      <Testimonials />
      <ContactMe />
      <Footer />

    </div>
    </>
  );
}

export default App;
