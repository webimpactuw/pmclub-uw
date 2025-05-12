import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Calendar from "./pages/Calendar";
import Resources from "./pages/Resources";
import NoPage from "./pages/NoPage";
import { NavBar } from './NavBar.js';
import { Footer } from './Footer.js';

function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
        <NavBar />  
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="events" element={<Events />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="resources" element={<Resources />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
