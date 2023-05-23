import './App.scss';
import {About, Footer, Header, Skills,Certificates,  Work } from "./container/";
import {Navbar} from './components'

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      <Certificates/> 
      <Footer/>
    </div>
  );
}

export default App;
