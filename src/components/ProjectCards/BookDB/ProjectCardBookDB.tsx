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
import BookDBModal from "./BookDBModal";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function ProjectCardBookDB() {
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
        mt={50}
        overflow="hidden"
        bgColor="background"
        color="text"
        height={390} // Adjusted height to match the Smart House card
        width={"100%"} // Ensures the card takes full width of its container
        maxW={350} // Ensures max width is consistent across breakpoints
        display="flex"
        flexDirection="column"
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
          src="/images/ReactNative.jpg"
          alt={t("BookDB Title")}
          objectFit="cover"
          height={175}
          width="100%" // Ensures image takes full width of the card
          maxWidth={350} // Ensures image does not exceed the card's width
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
            _hover={{
              color: "accent",
            }}
          >
            {t("BookDB Title")}
          </Heading>
          <Text noOfLines={4}>
            {" "}
            {/* Adjusted to match the number of lines in Smart House card */}
            {t("BookDB Description")}
          </Text>
        </Stack>
        <CardFooter mt="auto" p={4}>
          <Flex justifyContent="space-between" alignItems="center" width="100%">
            <ButtonGroup spacing="2">
              <Link href="https://github.com/Ludde94/BookDB" isExternal>
                <Button
                  leftIcon={<FaGithub />}
                  variant="outline"
                  color="text"
                  size="sm"
                  _hover={{
                    borderColor: "accent",
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
                bgColor="primary"
                color="background"
                _hover={{
                  bgColor: "secondary",
                }}
              >
                More Info
              </Button>
            </ButtonGroup>
          </Flex>
        </CardFooter>
      </Card>
      <BookDBModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </>
  );
}

export default ProjectCardBookDB;
