import { Box, Container, Text, HStack, Heading } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

function ExperienceCard() {
  const { t } = useTranslation();
  const milestones = [
    {
      id: 1,
      date: "Aug 2024 - present",
      title: t("Full-stack Developer"),
      description: "Luday SE • Internship",
      location: "Gothenburg, Västa Götaland County, Sweden • Remote",
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

export default ExperienceCard;
