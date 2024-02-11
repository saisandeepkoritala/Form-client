import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Login from "./Auth/login";
import Signup from "./Auth/signup";
import Navbar from "./components/Navbar";
import "react-toastify/dist/ReactToastify.css";
import { useSelector} from "react-redux";

function App() {
  const {isUser} = useSelector((store)=>store.user)
  return (
  <BrowserRouter> 
      {isUser && <Navbar />}
      <div className="routes">
        <Routes>
          <Route element={(!isUser)?<Login />:<Home />} path="/"/>
          <Route element={<Signup />} path="/signup"/>
          <Route element={<Home />} path="/home"/>
          <Route element={<About />} path="/about"/>
          <Route element={<Contact />} path="/contact"/>
          <Route element={<Services />} path="/services"/>
        </Routes>
      </div>
      <div className="footer-card">
        <Footer/>
      </div>
  </BrowserRouter>
)}

export default App;