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

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Home" element={<Index />} />
        <Route path="/caesar-explanation" element={<CaesarExplanation />} />
        <Route path="/custom-explanation" element={<CustomEncryption />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
