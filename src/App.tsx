import { Box, Divider } from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects";
import Skills from "./pages/Skills/Skills";
import Footer from "./pages/Footer/Footer";
import ScrollIndicator from "./components/ScrollArrow/ScrollArrow";
import ScrollButton from "./components/ScrollButton/ScrollButton";

const App = (): JSX.Element => {
  return (
    <Box>
      <ScrollIndicator />
      <Navbar />
      <ScrollButton />
      <Box id="about" pt="20px" mt="0px">
        {" "}
        <About />
      </Box>

      <Box id="projects" pt="20px" mt="0px">
        <Projects />
      </Box>

      <Box id="education" pt="20px" mt="0px">
        <Education />
      </Box>

      <Box id="skills" pt="20px" mt="-0px">
        <Skills />
      </Box>

      <Box id="footer" pt="20px" mt="0px">
        <Footer />
      </Box>
    </Box>
  );
};

export default App;
