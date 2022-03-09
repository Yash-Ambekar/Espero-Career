import "./App.css";
import Navbar from "./Components/Navbar";
import Slideshow from "./Components/Slideshow";
import Copyright from "./Components/copyright";
import ContactUS from "./Components/contactUs";
import "bootstrap/dist/css/bootstrap.min.css";
import EsperoTiles from "./Components/EsperoTiles"

function App() {
  return (
    <>
      <Navbar />
      <Slideshow />
      <EsperoTiles/>
      <ContactUS />
      <Copyright />
    </>
  );
}

export default App;
