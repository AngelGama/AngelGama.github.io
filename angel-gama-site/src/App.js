import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Career } from './components/Career';
import { Footer } from './components/Footer';
import { Disclaimer } from './components/Disclaimer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <Disclaimer />
      <NavBar />
      <Banner />
      <Skills />
      <Career />
      <Footer />
    </div>
  );
}

export default App;
