import logo from './logo.svg';
import './App.css';
import Header from './Header.js'
import About from './About.js';
import Projects from './Projects.js';
import Skills from './Skills.js';
import Education from './Education.js';
import Certificates from './Certificates.js';
import Footer from './Footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Certificates />
      <Footer />
    </div>
  );
}

export default App;
