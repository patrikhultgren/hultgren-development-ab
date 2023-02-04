import Navbar from 'components/Navbar'
import Intro from 'components/Intro'
import About from 'components/About'
import Projects from 'components/Projects'

export default function App() {
  return (
    <>
      <div className="header-wrapper">
        <Navbar />
        <Intro />
      </div>
      <About />
      <Projects />
    </>
  )
}
