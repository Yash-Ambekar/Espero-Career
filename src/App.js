import "./App.css";
import Navbar from "./Components/Navbar";
import Slideshow from "./Components/Slideshow";
import Copyright from "./Components/copyright";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <Navbar />
      <Slideshow />
      <Copyright />
    </>
  );
}

export default App;
