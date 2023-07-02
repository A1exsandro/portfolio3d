import { BrowserRouter } from 'react-router-dom'

import { About, Contact, Experience, Feedbacks,
Hero, Navbar, Tech, Works, StarsCanvas } from './components'
import { useIsMobile } from './contexts/IsMobileContext'

const App = () => { 
  const { isMobile } = useIsMobile()

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        <About />
        <Experience />
        { !isMobile && <Tech /> }
        <Works />
        <Feedbacks />
        
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
