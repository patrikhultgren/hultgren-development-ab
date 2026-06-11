import Intro from 'components/Intro'
import Projects from 'components/Projects'
import Knowledge from 'components/Knowledge'
import About from 'components/About'
import Footer from 'components/Footer'
import { es } from 'translations'
import { smallProjects, largeProjects, knowledges } from 'data.es'

export default function HomeEs() {
  return (
    <>
      <main role="main">
        <Intro t={es.intro} />
        <Projects t={es.projects} smallProjects={smallProjects} largeProjects={largeProjects} />
        <Knowledge t={es.knowledge} knowledges={knowledges} />
        <About t={es.about} />
      </main>
      <Footer t={es.footer} currentLocale="es" />
    </>
  )
}
