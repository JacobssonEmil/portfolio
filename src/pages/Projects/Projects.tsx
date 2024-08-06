import { Box, Container, Heading, Text, Flex, chakra } from "@chakra-ui/react";

import ProjectCardMedlemma from "../../components/ProjectCards/Medlemma/ProjectCardMedlemma";
import ProjectCardSmartHouse from "../../components/ProjectCards/SmartHouse/ProjectCardSmartHouse";
import ProjectCardPortfolio from "../../components/ProjectCards/Portfolio/ProjectCardPortfolio";
import ProjectCardBookDB from "../../components/ProjectCards/BookDB/ProjectCardBookDB";
import { useTranslation } from "react-i18next";

function Project() {
  const { t } = useTranslation();
  return (
    <Container maxWidth="1300px" marginTop="100px">
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
        justifyContent={{ base: "center", xl: "space-between" }}
      >
        <Box p={{ base: 0, md: 4, xl: 0 }}>
          <ProjectCardSmartHouse key="project-smart-house" />
        </Box>
        <Box p={{ base: 0, md: 4, xl: 0 }}>
          <ProjectCardBookDB key="project-bookdb" />
        </Box>
        <Box p={{ base: 0, md: 4, xl: 0 }}>
          <ProjectCardMedlemma key="project-medlemma" />
        </Box>
        <Box p={{ base: 0, md: 4, xl: 0 }}>
          <ProjectCardPortfolio key="project-portfolio" />
        </Box>
      </Flex>
    </Container>
  );
}

export default Project;
