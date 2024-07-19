import { useTranslation } from "react-i18next";
import {
  Box,
  Flex,
  IconButton,
  HStack,
  Stack,
  useDisclosure,
  Container,
  Avatar,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Link,
  Text,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  EmailIcon,
} from "@chakra-ui/icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

const Navbar = () => {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const Links = [
    { name: t("About"), ref: "about" },
    { name: t("Education"), ref: "education" },
    { name: t("Projects"), ref: "projects" },
    { name: t("Technologies and Tools"), ref: "skills" },
    { name: t("Contact"), ref: "footer" },
  ];

  return (
    <Box
      w="100%"
      position="absolute"
      top="0"
      left="0"
      zIndex="1000"
      bg="primary"
    >
      <Container maxW="container.xl">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon boxSize="24px" />}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            variant="ghost"
            backgroundColor="transparent"
            _hover={{ bg: "transparent" }}
            _active={{ bg: "transparent" }}
            _focus={{ boxShadow: "none" }}
            color="background"
          />
          <HStack spacing={8} alignItems="center">
            <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
              {Links.map((link, index) => (
                <Box
                  key={index}
                  as="a"
                  href={`#${link.ref}`}
                  p={2}
                  rounded="md"
                  _hover={{
                    textDecoration: "underline",
                    textDecorationColor: "background",
                    textDecorationThickness: "2px",
                    color: "background",
                  }}
                  color="background"
                  fontWeight="medium"
                  fontSize="md"
                >
                  {link.name}
                </Box>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems="center">
            <LanguageSwitcher />
            <Menu>
              <MenuButton _hover={{ bg: "gray.700" }}>
                <Avatar
                  size="sm"
                  name="Emil Jacobsson"
                  src="/images/Profilbild.jpeg"
                />
                <ChevronDownIcon boxSize={6} mt={1} color="background" />
              </MenuButton>
              <MenuList color="text" bg="background">
                <Link
                  href="https://www.linkedin.com/in/emiljacobsson/"
                  isExternal
                  _hover={{
                    textDecoration: "underline",
                    textDecorationColor: "text",
                    color: "text",
                    textDecorationThickness: "2px",
                  }}
                >
                  <MenuItem bg="white">
                    <Flex marginEnd={2}>
                      <FaLinkedin color="#0A66C2" />
                    </Flex>
                    <Text>{t("Linkedin")}</Text>
                  </MenuItem>
                </Link>
                <Link
                  href="https://github.com/JacobssonEmil"
                  isExternal
                  _hover={{
                    textDecoration: "underline",
                    textDecorationColor: "text",
                    color: "text",
                    textDecorationThickness: "2px",
                  }}
                >
                  <MenuItem bg="white">
                    <Flex marginEnd={2}>
                      <FaGithub color="text" />
                    </Flex>
                    <Text>{t("Github")}</Text>
                  </MenuItem>
                </Link>
                <Link
                  href="mailto:emil@jacobsson.com"
                  isExternal
                  _hover={{
                    textDecoration: "underline",
                    textDecorationColor: "text",
                    color: "text",
                    textDecorationThickness: "2px",
                  }}
                >
                  <MenuItem bg="white">
                    <EmailIcon marginTop={1} marginEnd={2} color="text" />
                    <Text>{t("Email")}</Text>
                  </MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
        {isOpen && (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as="nav" spacing={4}>
              {Links.map((link, index) => (
                <Box
                  key={index}
                  as="a"
                  href={`#${link.ref}`}
                  p={2}
                  rounded="md"
                  _hover={{
                    textDecoration: "underline",
                    textDecorationColor: "white",
                    textDecorationThickness: "2px",
                    color: "white",
                  }}
                  color="white"
                  fontWeight="medium"
                  fontSize="md"
                >
                  {link.name}
                </Box>
              ))}
            </Stack>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Navbar;
