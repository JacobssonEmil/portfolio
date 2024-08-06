import {
  Box,
  chakra,
  Container,
  Text,
  HStack,
  VStack,
  Flex,
  useBreakpointValue,
  Heading,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

interface EducationProps {
  id: number;
  title: string;
  description: string;
  date: string;
}

function EducationCard() {
  const { t } = useTranslation();
  const milestones = [
    {
      id: 1,
      date: "Aug 2021 - Jun 2024",
      title: t("Bachelor Program in Software Development"),
      description: t("University Kristianstad"),
    },
    {
      id: 2,
      date: "Aug 2017 - Jun 2020",
      title: t("Technology Program"),
      description: t("NTI High School"),
    },
  ];
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });

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
            </Box>
          </HStack>
        </Box>
      ))}
    </Container>
  );
}

export default EducationCard;
