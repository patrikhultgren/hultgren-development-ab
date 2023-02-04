import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';

const App = () => (
  <>
    <div className="header-wrapper">
      <Navbar />
      <Intro />
    </div>
    <About />
  </>
)


export default App;
