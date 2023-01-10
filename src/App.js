import { Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./pages/Admin";
import BuyNow from "./pages/BuyNow";
import Home from "./pages/Home";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";

function App() {
   return (
      <div className="App">
         <Navbar></Navbar>
         <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/buy" element={<BuyNow />}></Route>
            <Route
               path="/sawonsohaaymanabidsafrinhumaira"
               element={<Admin />}
            ></Route>
         </Routes>
         <Footer></Footer>
      </div>
   );
}

export default App;
