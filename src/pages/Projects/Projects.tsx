import { Box, Container, Heading, Text, Flex, chakra } from "@chakra-ui/react";
import ProjectCardMedlemma from "../../components/ProjectCards/Medlemma/ProjectCardMedlemma";
import ProjectCardSmartHouse from "../../components/ProjectCards/SmartHouse/ProjectCardSmartHouse";
import ProjectCardBookDB from "../../components/ProjectCards/BookDB/ProjectCardBookDB";
import { useTranslation } from "react-i18next";

function Project() {
  const { t } = useTranslation();
  return (
    <Container maxWidth="1300px">
      <Heading size="lg" color="text">
        {" "}
        <chakra.span>
          <Flex>
            <Text color="text">{t("Projects Title")}</Text>{" "}
          </Flex>
        </chakra.span>
      </Heading>

      <Flex
        direction="row"
        wrap="wrap"
        justifyContent={{ base: "left", xl: "space-between" }}
      >
        <Box pr={{ base: 0, md: 4, xl: 0 }} mb={2}>
          <ProjectCardSmartHouse key="project-smart-house" />
        </Box>
        <Box
          pl={{ base: 0, md: 4, xl: 0 }}
          pr={{ base: 0, md: 8, xl: 0 }}
          mb={2}
        >
          <ProjectCardBookDB key="project-bookdb" />
        </Box>
        <Box pr={{ base: 0, md: 4, xl: 0 }}>
          <ProjectCardMedlemma key="project-medlemma" />
        </Box>
        {/**<Box p={{ base: 0, md: 4, xl: 0 }} mb={2}>
          <ProjectCardPortfolio key="project-portfolio" />
        </Box> */}
      </Flex>
    </Container>
  );
}

export default Project;
