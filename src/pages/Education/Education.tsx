import { useTranslation } from "react-i18next";
import { Box, Flex, Container, Heading, chakra, Text } from "@chakra-ui/react";
import EducationCard from "../../components/EducationCard/EducationCard";
import { FaGraduationCap } from "react-icons/fa";

function Education() {
  const { t } = useTranslation();

  return (
    <Container maxWidth="1200px" marginTop="150px">
      <Box mb={50}>
        <Heading size="lg" color="text">
          <chakra.span
            borderBottom="3px solid"
            borderColor={"accent"}
            display="inline-block"
            paddingBottom="4px"
          >
            <Flex>
              <Box mt={1}>
                <FaGraduationCap color="text" />
              </Box>
              <Text ml={2} color="text">
                {t("Education Title")}
              </Text>
            </Flex>
          </chakra.span>
        </Heading>
      </Box>

      <EducationCard />
    </Container>
  );
}

export default Education;
