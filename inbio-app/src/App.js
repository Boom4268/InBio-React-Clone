
import './App.css';
import Author from './components/Author/Author';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Navbar from './components/Navbar/Navbar';
import Project from './components/Project/Project';
import Reviews from './components/Reviews/Reviews';

function App() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Author />
      <Project />
      <Contact />
      <Reviews />
      <Footer />
    </>
  );
}

export default App;
