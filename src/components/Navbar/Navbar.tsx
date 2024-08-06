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
  Heading,
  Divider,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  EmailIcon,
} from "@chakra-ui/icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";
/*import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";*/

const Navbar = () => {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const Links = [
    { name: t("About"), ref: "about" },
    { name: t("Projects"), ref: "projects" },
    { name: t("Education"), ref: "education" },
    { name: t("Technologies and Tools"), ref: "skills" },
  ];

  return (
    <Box
      w="100%"
      position="fixed"
      top="0"
      left="0"
      zIndex="1000"
      bg="background"
    >
      <Container maxW="1300px">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Flex alignItems="center">
            <Menu>
              <Heading as="h4" size="md" marginRight={4}>
                Emil Jacobsson
              </Heading>
              <MenuButton>
                <Avatar
                  marginTop={"4px"}
                  size="xs"
                  name="Emil Jacobsson"
                  src="/images/Profilbild.jpeg"
                />
                <ChevronDownIcon boxSize={6} mt={1} color="subtleText" />
              </MenuButton>

              <MenuList bg="background">
                <Link
                  href="https://www.linkedin.com/in/emiljacobsson/"
                  isExternal
                  _hover={{
                    textDecoration: "underline",
                    textDecorationColor: "subtleText",
                    color: "text",
                    textDecorationThickness: "1px",
                  }}
                >
                  <MenuItem bg="background">
                    <Flex marginEnd={2}>
                      <FaLinkedin color="text" />
                    </Flex>
                    <Text>{t("Linkedin")}</Text>
                  </MenuItem>
                </Link>
                <Link
                  href="https://github.com/JacobssonEmil"
                  isExternal
                  _hover={{
                    textDecoration: "underline",
                    textDecorationColor: "subtleText",
                    color: "text",
                    textDecorationThickness: "1px",
                  }}
                >
                  <MenuItem bg="background">
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
                    textDecorationColor: "subtleText",
                    color: "subtleText",
                    textDecorationThickness: "1px",
                  }}
                >
                  <MenuItem bg="background">
                    <EmailIcon marginTop={1} marginEnd={2} color="texst" />
                    <Text>{t("Email")}</Text>
                  </MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Flex>

          <HStack spacing={8} alignItems="center">
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
              color="subtleText"
            />
            <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
              {Links.map((link, index) => (
                <Box
                  key={index}
                  as="a"
                  href={`#${link.ref}`}
                  p={0}
                  rounded="md"
                  _hover={{
                    textDecoration: "underline",
                    textDecorationColor: "subtleText",
                    textDecorationThickness: "1px",

                    color: "subtleText",
                  }}
                  color="subtleText"
                  fontWeight="medium"
                  fontSize="md"
                >
                  {link.name}
                </Box>
              ))}
            </HStack>
          </HStack>
        </Flex>
        {isOpen && (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as="nav" spacing={8}>
              {Links.map((link, index) => (
                <Box
                  key={index}
                  as="a"
                  href={`#${link.ref}`}
                  p={0}
                  rounded="md"
                  _hover={{
                    textDecoration: "underline",
                    textDecorationColor: "subtleText",
                    textDecorationThickness: "2px",
                    color: "subtleText",
                  }}
                  color="subtleText"
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
      <Divider></Divider>
    </Box>
  );
};

export default Navbar;
