import { Routes, Route } from 'react-router-dom'
import Navigation from './routes/navigation/navaigation.components'
import Home from './routes/home/home.components'
import About from './routes/about/about.components'
import Projects from './routes/projects/projects.components'
import Contact from './routes/contact/contact.componets'

const App = () => { 
  return (
    <Routes>
      <Route pather="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App