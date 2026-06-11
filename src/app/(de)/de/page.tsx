import Intro from 'components/Intro'
import Projects from 'components/Projects'
import Knowledge from 'components/Knowledge'
import About from 'components/About'
import Footer from 'components/Footer'
import { de } from 'translations'
import { smallProjects, largeProjects, knowledges } from 'data.de'

export default function HomeDe() {
  return (
    <>
      <main role="main">
        <Intro t={de.intro} />
        <Projects t={de.projects} smallProjects={smallProjects} largeProjects={largeProjects} />
        <Knowledge t={de.knowledge} knowledges={knowledges} />
        <About t={de.about} />
      </main>
      <Footer t={de.footer} currentLocale="de" />
    </>
  )
}
