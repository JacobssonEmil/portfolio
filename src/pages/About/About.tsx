import { EmailIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Heading,
  Text,
  Flex,
  Link,
  Icon,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <Container maxWidth="1300px">
      <Box textAlign="left" maxW={"700px"}>
        <Heading size="3xl" color="text" mb={4}>
          Emil J.
        </Heading>
        <Text fontSize="2xl" fontWeight={800} color="subtleText" mb={4}>
          {t("About Introduction")}
        </Text>
        <Text color={"subtleText"} fontSize="md" mb={6}>
          {t("About Description")}
        </Text>
        <Flex justifyContent="left" mt={4} gap={6}>
          <Link href="https://www.linkedin.com/in/emiljacobsson/" isExternal>
            <Icon
              as={FaLinkedin}
              boxSize={7}
              color="linkedin"
              _hover={{ transform: "scale(1.1)" }}
            />
          </Link>
          <Link href="https://github.com/JacobssonEmil" isExternal>
            <Icon
              as={FaGithub}
              boxSize={7}
              color="github"
              _hover={{ transform: "scale(1.1)" }}
            />
          </Link>
          <Link href="mailto:emil@jacobsson.com" isExternal>
            <Icon
              as={EmailIcon}
              boxSize={7}
              color="github"
              _hover={{ transform: "scale(1.1)" }}
            />
          </Link>
        </Flex>
      </Box>
    </Container>
  );
}

export default About;
