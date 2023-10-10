import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

// Import Style
import './styles/style.css'; // Assuming your CSS is in the 'styles' directory

// Import Pages
import Home from './pages/Home';
import AboutKasa from './pages/Propos';
import Rental from './pages/Logement'; // Make sure to match the case of the folder name
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
          <Route path='/a-propos' element={<AboutKasa />} />
          <Route path='/adresse-introuvable' element={<Error />} />
          <Route
            path='*'
            element={<Navigate to='/adresse-introuvable' replace />}
          />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
