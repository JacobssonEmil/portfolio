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

        <Box id="about" pt="130px" pb={70}>
          <About />
        </Box>

        <Box maxW="1270px" mx="auto">
          <Divider borderColor={"gray.300"} />
        </Box>

        <Box id="projects" pt={70} pb={70}>
          <Projects />
        </Box>

        <Box maxW="1270px" mx="auto">
          <Divider borderColor={"gray.300"} />
        </Box>

        <Box id="education" pt={70} pb={70}>
          <Education />
        </Box>

        <Box maxW="1270px" mx="auto">
          <Divider borderColor={"gray.300"} />
        </Box>

        <Box id="skills" pt={70} pb={70}>
          <Skills />
        </Box>
      </Box>
      <Box id="footer" mt={35}>
        <Footer />
      </Box>
    </>
  );
};

export default App;
