import React,{useState} from 'react';
import NavBar from './header';
import AboutMe from './pages/About me';
import Footer from './footer';
import Projects from './pages/Project'



//   export default function PortfolioContainer() {
//     // const [currentPage, setCurrentPage] = useState('Home');
  
//     // // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
//     // const renderPage = () => {
//     //   if (currentPage === 'Home') {
//     //     return <AboutMe />;
//     //   }
//     //   if (currentPage === 'projects') {
//     //     return <Projects/>;
//     //   }
      
//     //   return <Contact />;
//     // };
  
//     // const handlePageChange = (page) => setCurrentPage(page);
//   return (
//     <div>
//       <NavBar />
//       {/* {renderPage()} */}
      
//       <Footer/>
      
//     </div>)


// }

function test (){
    return (
    <div>
    <NavBar/>
    <AboutMe/>
    <Projects/>
    <Footer/>
    </div>)
}

export default test;