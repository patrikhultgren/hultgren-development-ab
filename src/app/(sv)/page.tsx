import Intro from 'components/Intro'
import Projects from 'components/Projects'
import Knowledge from 'components/Knowledge'
import About from 'components/About'
import Footer from 'components/Footer'
import { sv } from 'translations'
import { smallProjects, largeProjects, knowledges } from 'data'

export default function Home() {
  return (
    <>
      <main role="main">
        <Intro t={sv.intro} />
        <Projects t={sv.projects} smallProjects={smallProjects} largeProjects={largeProjects} />
        <Knowledge t={sv.knowledge} knowledges={knowledges} />
        <About t={sv.about} />
      </main>
      <Footer t={sv.footer} currentLocale="sv" />
    </>
  )
}
