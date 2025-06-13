import { Hero } from './features/Hero/Hero'
import { Timeline } from './features/Timeline/Timeline'
import { Projects } from './features/Projects/Projects'
import { Skills } from './features/Skills/Skills'
import { SoftSkills } from './features/SoftSkills/SoftSkills'
import { Contact } from './features/Contact/Contact'
import { Layout } from './features/Layout/Layout'

function App() {
  return (
    <Layout>
      <Hero />
      <Timeline />
      <Projects />
      <Skills />
      <SoftSkills />
      <Contact />
    </Layout>
  )
}

export default App
