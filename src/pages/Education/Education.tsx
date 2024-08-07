import { useTranslation } from "react-i18next";
import { Box, Flex, Container, Heading, chakra, Text } from "@chakra-ui/react";
import EducationCard from "../../components/EducationCard/EducationCard";

function Education() {
  const { t } = useTranslation();

  return (
    <Container maxWidth="1300px">
      <Box>
        <Heading size="lg" color="text">
          <chakra.span>
            <Flex>
              <Text color="text">{t("Education Title")}</Text>
            </Flex>
          </chakra.span>
        </Heading>
      </Box>

      <EducationCard />
    </Container>
  );
}

export default Education;
