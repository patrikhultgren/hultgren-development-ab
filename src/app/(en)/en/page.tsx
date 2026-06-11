import Intro from 'components/Intro'
import Projects from 'components/Projects'
import Knowledge from 'components/Knowledge'
import About from 'components/About'
import Footer from 'components/Footer'
import { en } from 'translations'
import { smallProjects, largeProjects, knowledges } from 'data.en'

export default function HomeEn() {
  return (
    <>
      <main role="main">
        <Intro t={en.intro} />
        <Projects t={en.projects} smallProjects={smallProjects} largeProjects={largeProjects} />
        <Knowledge t={en.knowledge} knowledges={knowledges} />
        <About t={en.about} />
      </main>
      <Footer t={en.footer} currentLocale="en" />
    </>
  )
}
