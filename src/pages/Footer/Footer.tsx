import { Box, Container, Stack, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box bg={"#e2e2e6"}>
      <Container as={Stack} maxW="1300px" py={6} align="center">
        <Box>
          <Text fontSize="sm" color="subtleText">
            © 2024 by Emil Jacobsson. {t("All rights reserved")}
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
