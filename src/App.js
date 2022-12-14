import './App.css';
import NavBar from './NavBar';
import AppRoutes from './Routes';
import { Footer } from './Footer';

function App() {
  return (
    <div >
      <header className='container-fluid'>
        <NavBar/>
      </header>
      <main className='container-fluid'>
        <AppRoutes/>
      </main>
      <Footer className="footer-component"/>
    </div>
  );
}

export default App;
