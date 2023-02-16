// Components
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import SmallBox from './components/SmallBox';
import Footer from './components/Footer';


// Styles
import './App.css';

function App() {
  return (
    <div className="App bg-main-bg-color">
      <Navbar />
      <HomePage />
    <div className="SmallBox-container flex justify-around item-center px-6 py-16">
      <SmallBox />
      <SmallBox />
      <SmallBox />
      <SmallBox />
    </div>

    <Footer />
  </div>
  );
}

export default App;
