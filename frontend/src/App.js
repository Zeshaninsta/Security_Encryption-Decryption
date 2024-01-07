import "./App.css";
import Index from "./components";
import CustomEncryption from "./components/Explanation/CustomEncryption";
import CaesarExplanation from "./components/Explanation/CaesarExplanation";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Encryption";
import Home from "./components/Hero";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Home" element={<Index />} />
        <Route path="/Home/Services" element={<Index />} />
        <Route path="/Home/SecondPage" element={<Index />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/caesar-explanation" element={<CaesarExplanation />} />
        <Route path="/custom-explanation" element={<CustomEncryption />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
