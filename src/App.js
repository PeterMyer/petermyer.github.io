import './App.css';
import NavBar from './NavBar';
import AppRoutes from './Routes';
import { Footer } from './Footer';

function App() {
  return (
    <div className='app-shell'>
      <header className='container-fluid app-header p-0'>
        <NavBar/>
      </header>
      <main className='container-fluid app-main'>
        <AppRoutes/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
