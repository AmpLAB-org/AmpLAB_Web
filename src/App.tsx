import { BrowserRouter as Router, Routes, Route } from "react-router";
import Header from "./components/header/Header";
import About from "./pages/AboutUs";
import Home from "./pages/Home";
import Community from "./pages/Community";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/download" element={<Download />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/community" element={<Community />} />
      </Routes>
    </Router>
  );
}

export default App;
