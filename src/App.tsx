import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import Header from "./components/header/Header";
import About from "./pages/AboutUs";
import Home from "./pages/Home";
import Community from "./pages/Community";
import Blog from "./pages/community/Blog";
import News from "./pages/community/News";
import CommunityBoard from "./pages/community/CommunityBoard";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/download" element={<Download />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/community" element={<Community />}>
          <Route index element={<Navigate to="/community/blog" replace />} />
          <Route path="blog" element={<Blog />} />
          <Route path="news" element={<News />} />
          <Route path="community" element={<CommunityBoard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
