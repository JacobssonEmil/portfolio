import { Box, Container, Text, HStack, Heading } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

function EducationCard() {
  const { t } = useTranslation();
  const milestones = [
    {
      id: 1,
      date: "Aug 2021 - Jun 2024",
      title: t("Bachelor Program in Software Development"),
      description: t("University Kristianstad"),
      location: "Kristianstad, Skåne County, Sweden ",
    },
    {
      id: 2,
      date: "Aug 2017 - Jun 2020",
      title: t("Technology Program"),
      description: t("NTI High School"),
      location: "Helsingborg, Skåne County, Sweden ",
    },
  ];

  return (
    <Container
      maxWidth="1300px"
      p={0}
      m="0 auto"
      sx={{
        width: "100%",
        maxW: "1300px",
      }}
    >
      {milestones.map((milestone) => (
        <Box key={milestone.id}>
          <HStack spacing={4} alignItems="start">
            <Box>
              <Heading size="md" mt={6} color="black">
                {milestone.title}
              </Heading>
              <Text mt={2} fontSize="md" color="subtleText">
                {milestone.description}
              </Text>
              <Text fontSize="md" color="subtleText">
                {milestone.date}
              </Text>
              <Text fontSize="md" color="subtleText">
                {milestone.location}
              </Text>
            </Box>
          </HStack>
        </Box>
      ))}
    </Container>
  );
}

export default EducationCard;
