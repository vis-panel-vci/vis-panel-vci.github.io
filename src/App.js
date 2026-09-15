import SlidoIframe from './components/SlidoIframe';
import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';
import People from './components/People';
import Schedule from './components/Schedule';


function App() {
  return (
    <div className="App">
      <Header />
      <People title="Panelists" />
      <People title="Organizers" />
      <Schedule />
    {/* <SlidoIframe /> */}
    <Footer />
    </div>
  );
}

export default App;
