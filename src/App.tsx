// src/App.tsx
import { Box } from '@chakra-ui/react';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import Education from './pages/Education/Education';
import Projects from './pages/Projects/Projects';
import Skills from './pages/Skills/Skills';

import ScrollIndicator from './components/ScrollArrow/ScrollArrow'
import Footer from './pages/Footer/Footer';

const App = () => {
  return (
    
    <Box>
      <ScrollIndicator/>
      <Navbar />
      <Box id="about" >
        {/* Embed the About component */}
        <About />
      </Box>
      
      <Box id="education">
        {/* Embed the Education component */}
        <Education />
      </Box>
      <Box id="projects">
        {/* Embed the Projects component */}
        <Projects />
      </Box>
      <Box id="skills">
        {/* Embed the Projects component */}
        <Skills />
      </Box>
      <Box id="footer">
        {/* Embed the Projects component */}
        <Footer />
      </Box>
    </Box>
  );
};

export default App;
