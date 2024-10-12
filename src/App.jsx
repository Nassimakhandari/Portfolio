
import { Routes, Route} from "react-router-dom";
import Home from "./pages/home/Home";
import "./index.css";
import NavBar from "./layouts/navbar";
import Index2 from "./index2";
import Footer from "./layouts/footer";

function App() {
  return (
    <>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Index2 />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;

