import { BrowserRouter as Router } from 'react-router-dom'
import Intro from 'components/Intro'
import About from 'components/About'
import Projects from 'components/Projects'
import Footer from 'components/Footer'

export default function App() {
  return (
    <Router>
      <main role="main">
        <Intro />
        <About />
        <Projects />
      </main>
      <Footer />
    </Router>
  )
}
