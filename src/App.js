import './App.css';
import { HashRouter, Routes, Route} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Calendar from "./pages/Calendar";
import Resources from "./pages/Resources";
import NoPage from "./pages/NoPage";
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import ScrollToTop from "./scrollToTop";

function App() {
  return (
    <div className="App"> 
      <HashRouter basename="/pmclub-uw">
        <ScrollToTop />
        <Navbar />  
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="resources" element={<Resources />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
