import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Project from './pages/Project';
import Experience from './pages/Experience';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import Preloader from './components/Preloader';
import ProjectDisplay from './pages/ProjectDisplay';
import Contact from './pages/Contact';
import SnackbarProvider from 'react-simple-snackbar';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, [load]);



  
  var a = ['dog', 'cat', 'hen'];

  a[100] = 'fox';
  
  console.log(a.length);
  return (
    <div className='App' id={load ? 'no-scroll' : 'scroll'}>
      <HashRouter>
        <SnackbarProvider>
          <Preloader load={load} />
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/project' element={<Project />} />
            <Route path='/project/:id' element={<ProjectDisplay />} />
            <Route path='/experience' element={<Experience />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          <Footer />
        </SnackbarProvider>
      </HashRouter>





    </div>
  );
}

export default App;
