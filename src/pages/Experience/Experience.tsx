import { Box, Container, Heading, Text, Flex, chakra } from "@chakra-ui/react";

import { useTranslation } from "react-i18next";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";

function Experience() {
  const { t } = useTranslation();
  return (
    <Container maxWidth="1300px">
      <Box>
        <Heading size="lg" color="text">
          <chakra.span>
            <Flex>
              <Text color="text">{t("Experience title")}</Text>
            </Flex>
          </chakra.span>
        </Heading>
      </Box>
      <ExperienceCard />
    </Container>
  );
}

export default Experience;
