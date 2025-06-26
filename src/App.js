import './App.css';
import Footer from './components/Footer';
import GitProjects from './components/GitProjects';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Projects/>
      <br/>
      <hr/>
      <br/>
      <GitProjects/>
      <br/><br/>
      <Footer/>
    </div>
  );
}

export default App;
