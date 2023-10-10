import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

// Import Style
import './styles/style.css';  

// Import Pages
import Home from './pages/Home';
import AboutUs from './pages/Propos';
import Rental from './pages/Logement';  
import Error from './components/Error';

// Import Components
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/logement/:rentalId' element={<Rental />} />
          <Route path='/a-propos' element={<AboutUs />} />
          <Route path='/adresse-unfindable' element={<Error />} />
          <Route
            path='*'
            element={<Navigate to='/adresse-unfindable' replace />}
          />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
