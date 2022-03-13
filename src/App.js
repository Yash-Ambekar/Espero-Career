import "./App.css";
import Navbar from "./Components/Navbar";
import Slideshow from "./Components/Slideshow";
import Copyright from "./Components/copyright";
import ContactUS from "./Components/contactUs";
import "bootstrap/dist/css/bootstrap.min.css";
import EsperoTiles from "./Components/EsperoTiles"
import VideoEmbed from './Components/videosEmbed';
import About from "./Components/About";

function App() {
  return (
    <>
      <Navbar/>
      <Slideshow />
      <VideoEmbed/>
      <About/>
      <EsperoTiles/>
      <ContactUS />
      <Copyright />
    </>
  );
}

export default App;
