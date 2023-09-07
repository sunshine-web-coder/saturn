import {Route, Routes} from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import './App.scss';

function App () {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
