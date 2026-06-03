import Cursor   from './components/Cursor'
import Navbar   from './components/Navbar'
import Hero     from './components/Hero'
import About    from './components/About'
import Skills   from './components/Skills'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Services  from './components/Services'
import Contact   from './components/Contact'
import Footer    from './components/Footer'
import BackToTop from './components/BackToTop'

export default function App() {
  return (
    <>
      <Cursor />
      <BackToTop />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Experience />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
