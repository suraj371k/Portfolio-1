import './App.css'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Project from './Components/Project';
import Contact from './Components/Contact';

function App() {
  return (
 <div className='bg-[whitesmoke]'>
  <Navbar/>
  <Home/>
  <About/>
  <Project/>
  <Contact/> 
 </div>
  );
}
export default App