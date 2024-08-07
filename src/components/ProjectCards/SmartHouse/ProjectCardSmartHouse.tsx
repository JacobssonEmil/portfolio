import {
  Heading,
  Text,
  Flex,
  Link,
  ButtonGroup,
  Card,
  CardFooter,
  Stack,
  Image,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import SmartHouseModal from "./SmartHouseModal";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function ProjectCardSmartHouse() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const { t } = useTranslation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Card
        boxShadow="base"
        rounded="lg"
        mt={6}
        overflow="hidden"
        bgColor="background"
        height={400}
        width={"100%"}
        maxW={400}
        display="flex"
        flexDirection="column"
        border="1px solid" // Add border here
        borderColor="gray.200" // Customize the border color as needed
        _hover={
          isMobile
            ? {}
            : {
                transform: "scale(1.05)",
                transition: "transform 0.3s ease-in-out",
              }
        }
      >
        <Image
          src="/images/SmartHouse.png"
          alt={t("Book DB Title")}
          objectFit="cover"
          height={"55%"}
          width="100%"
          maxWidth={"100%"}
        />
        <Stack
          mt="0"
          spacing="3"
          pt={5}
          pl={5}
          flex="1"
          overflow="hidden"
          pr={5}
          pb={0}
        >
          <Heading
            size="md"
            onClick={onOpen}
            cursor="pointer"
            color={"text"}
            _hover={{
              textDecoration: "underline",
              textDecorationColor: "text",
              color: "text",
              textDecorationThickness: "1px",
            }}
          >
            {t("Smart Home Title")}
          </Heading>
          <Text noOfLines={2} color={"subtleText"}>
            {t("Smart Home Description")}
          </Text>
        </Stack>

        <CardFooter mt="auto" p={4}>
          {" "}
          {/* Add margin top to push footer closer */}
          <Flex justifyContent="space-between" alignItems="center" width="100%">
            <ButtonGroup spacing="2">
              <Link
                href="https://github.com/SoftwareEngineering-Group2"
                isExternal
              >
                <Button
                  leftIcon={<FaGithub />}
                  variant="outline"
                  color="text" // Ensures the button text is consistent
                  size="sm"
                  height={9}
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                >
                  GitHub
                </Button>
              </Link>
            </ButtonGroup>
            <ButtonGroup spacing="2" justifySelf="flex-end">
              <Button
                onClick={onOpen}
                size="sm"
                height={9}
                bgColor="text"
                color="background"
                _hover={{
                  transform: "scale(1.05)",
                }}
              >
                More Info
              </Button>
            </ButtonGroup>
          </Flex>
        </CardFooter>
      </Card>
      <SmartHouseModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </>
  );
}

export default ProjectCardSmartHouse;
