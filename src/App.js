import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from 'components/Navbar'
import Intro from 'components/Intro'
import About from 'components/About'
import Projects from 'components/Projects'

export default function App() {
  return (
    <Router>
      <div className="header-wrapper">
        <Navbar />
        <Intro />
      </div>
      <About />
      <Projects />
    </Router>
  )
}
