import {Route, Routes} from 'react-router-dom';
import CombinedProvider from "./context/CombinedProvider";
import Header from './components/header/Header';
import Home from './pages/home/Home';
import './App.scss';
import Footer from './components/footer/Footer';

function App () {
  return (
    <div className="App">
      <CombinedProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />  
      </CombinedProvider>
      
    </div>
  );
}

export default App;
