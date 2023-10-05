import About from 'components/About';
import Header from './components/Header/index.jsx';
import Services from 'components/Services';
import './App.css';
import Search from 'components/Search/index.jsx';
import Map from 'components/Map/index.jsx';
import Footer from 'components/Footer/index.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Services />
      <Search />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
