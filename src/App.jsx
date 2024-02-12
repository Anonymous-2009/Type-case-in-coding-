import "./App.css";
import Navbar from "./components/navbar/navbar.jsx";
import Footer from "./components/footer/footer.jsx";
import Data from "./components/body/data.jsx";


export default function App() {
  return (
    <>
      <Navbar home='home' about='about' more='more' contact=' contact'/> 
      <div className="content">
     <p className="type"> different type of casing in coding </p>
        {/* Data is fetch map method to load datav */}
      <Data/>
      </div>
      <Footer data='all right reserved &copy; 2024 '/>
    </>
  );
}
