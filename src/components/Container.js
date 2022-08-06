import React,{useState} from 'react';
import NavBar from './Navbar';
import AboutMe from './pages/AboutMe';
import Footer from './Footer';
import Projects from './pages/Project';
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';




function Container() {
   
    
  
    const [page, setPage] = useState('HomePage');
  
    const pageRender = (pageName) => {
      switch (pageName) {
        case 'HomePage':
          return (
            <HomePage />
          );
        case 'Projects':
          return (
            <Projects />
          );
        case 'AboutMe':
          return (
            <AboutMe />
          );
          case 'Contact':
          return (
            <Contact/>
          );
  
      }
    }
  
    
    return (
      <>
        <NavBar setPage = {setPage} page ={page}/>
        <main>
          {pageRender(page)}
        </main>
        <Footer/>
      </>
    );
  }



export default Container;