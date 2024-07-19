import { useEffect, useState } from "react";
import { Box, Text, Button, Image } from "@chakra-ui/react";
import { FaArrowUp } from "react-icons/fa";

const handleScrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const ScrollButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.pageYOffset > 300 ? setShowButton(true) : setShowButton(false);
    };

    window.addEventListener("scroll", handleScrollButtonVisibility);

    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisibility);
    };
  }, []);

  return (
    showButton && (
      <Box position="fixed" bottom="20px" right="20px" zIndex="1000">
        <Button
          onClick={handleScrollToTop}
          bg="primary"
          color="background"
          _hover={{ bg: "accent" }}
        >
          <Text>
            <FaArrowUp />
          </Text>
        </Button>
      </Box>
    )
  );
};

export default ScrollButton;
