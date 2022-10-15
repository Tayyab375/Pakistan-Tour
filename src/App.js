import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// ----------Main components-----------------
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import Pakistan from "./Components/Pages/Pakistan/Pakistan";
import Ptc from "./Components/Pages/PTC/Ptc";
import Destinations from "./Components/Pages/Destinations/Destinations";
import Hotels from "./Components/Pages/Hotels/Hotels";
import Login from "./Components/Pages/Log in/Login";

import Punjab from "./Components/Pages/Pakistan/Section 3 Provinces/All Provinces/Punjab/Punjab";
import Sindh from "./Components/Pages/Pakistan/Section 3 Provinces/All Provinces/Sindh/Sindh";
import Balouchistan from "./Components/Pages/Pakistan/Section 3 Provinces/All Provinces/Balouchistan/Balouchistan";
import KPK from "./Components/Pages/Pakistan/Section 3 Provinces/All Provinces/KPK/KPK";
import GilgitBaltistan from "./Components/Pages/Pakistan/Section 3 Provinces/All Provinces/Gilgit Baltistan/GilgitBaltistan";
import AzadKashmir from "./Components/Pages/Pakistan/Section 3 Provinces/All Provinces/Azad Kashmir/AzadKashmir";
import Demo from "./Components/Pages/Temp del demo/Demo";
import SignUp from "./Components/Pages/Log in/Sign Up/SignUp";

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          {/* -------------pages------------- */}

          <Route path="/" element={<Home />} />
          <Route path="/Pakistan" element={<Pakistan />} />
          <Route path="/ptc" element={<Ptc />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/log-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />

          {/* --------------------provinces-------------------- */}
          <Route path="/punjab" element={<Punjab />} />
          <Route path="/sindh" element={<Sindh />} />
          <Route path="/balouchistan" element={<Balouchistan />} />
          <Route path="/kpk" element={<KPK />} />
          <Route path="/gb" element={<GilgitBaltistan />} />
          <Route path="/azad-kashmir" element={<AzadKashmir />} />
          <Route path="/demo" element={<Demo />} />
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
