import './App.css';
import './styles/main.css';
import Header from './components/header/header';
import Skills from './components/skills/skills';
import Footer from './components/footer/footer';
import Projects from './components/projects/projects';


function App() {
  return (
    <div className='App'>
        <Header></Header>
        <Skills></Skills>
        <Footer></Footer>
    </div>
  );
}

export default App;
