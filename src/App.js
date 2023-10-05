import About from 'components/About';
import Header from './components/Header/index.jsx';
import Services from 'components/Services';
import './App.css';
import Search from 'components/Search/index.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Services />
      <Search />
    </div>
  );
}

export default App;
