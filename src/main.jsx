import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from './components/nav.jsx'
import App from './App.jsx'
import About from './pages/about.jsx';
import Projects from './pages/projects.jsx';
import Form from './pages/form.jsx';
import Footer from './components/footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <App />
    <About />
    <Projects />
    <Form />
    <Footer />
  </StrictMode>, 
)
