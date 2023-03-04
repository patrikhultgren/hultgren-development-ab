import { BrowserRouter as Router } from 'react-router-dom'
import Intro from 'components/Intro'
import Projects from 'components/Projects'
import Knowledge from 'components/Knowledge'
import About from 'components/About'
import Footer from 'components/Footer'

export default function App() {
  return (
    <Router>
      <main role="main">
        <Intro />
        <Projects />
        <Knowledge />
        <About />
      </main>
      <Footer />
    </Router>
  )
}
