import "./App.css";
import Navbar from "./components/navbar/navbar.jsx";
import Footer from "./components/footer/footer.jsx";
import Data from "./components/body/data.jsx";

export default function App() {
  const object = {
    train:'Train case is a naming convention where the first letter of each word is capitalized and the rest is in lowercase. Each word is also',
    camel:'capitalizing words without spaces for readability in programming.', 
    snake:'separating words with underscores to improve readability in programming conventions ', 
    pascal:'apitalizing words without spaces for improved programming clarity ', 
    kebab:'Joining words with hyphens for clear naming in programming styles', 
  }
  return (
    <>
      <Navbar home='home' about='about' more='more' contact=' contact'/>
      <div className="content">
     <p className="type"> different type of casing in coding </p>
   <Data title="camelcase" data={object.camel}/>
   <Data title="traincase" data={object.train}/>
   <Data title="pascalcase" data={object.pascal}/>
   <Data title="snakecase" data={object.snake}/>
    <Data title="kebabcase" data={object.kebab}/>   
      </div>
      <Footer data='all right reserved &copy; 2024 '/>
    </>
  );
}
