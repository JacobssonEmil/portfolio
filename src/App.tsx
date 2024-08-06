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
    <>
      <Box mx="auto">
        <ScrollIndicator />
        <Navbar />
        <ScrollButton />

        <Box id="about" mt="130px">
          <About />
        </Box>

        <Box maxW="1270px" mx="auto">
          <Divider my="70px" />
        </Box>

        <Box id="projects">
          <Projects />
        </Box>

        <Box maxW="1270px" mx="auto">
          <Divider my="70px" />
        </Box>

        <Box id="education">
          <Education />
        </Box>

        <Box maxW="1270px" mx="auto">
          <Divider my="70px" />
        </Box>

        <Box id="skills">
          <Skills />
        </Box>
      </Box>
      <Box id="footer" mt={70}>
        <Footer />
      </Box>
    </>
  );
};

export default App;
