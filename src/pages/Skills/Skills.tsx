import {
  Box,
  Container,
  Flex,
  Heading,
  chakra,
  Text,
  Badge,
  Grid,
  Icon,
} from "@chakra-ui/react";
import {
  FaAws,
  FaCss3Alt,
  FaDatabase,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
  FaServer,
} from "react-icons/fa";
import { SiBootstrap, SiJira, SiKotlin, SiReact } from "react-icons/si";
import { MdApi } from "react-icons/md";
import { useTranslation } from "react-i18next";

function Skills() {
  const { t } = useTranslation();

  return (
    <Container maxWidth="1300px">
      <Heading size="lg" color="text">
        <chakra.span>
          <Flex>
            <Text color="text">{t("Technologies and Tools Title")}</Text>
          </Flex>
        </chakra.span>
      </Heading>

      <Box id="skills" mt={6}>
        <Grid
          templateColumns={{
            base: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap={4}
        >
          <Badge
            p={2}
            borderRadius="md"
            display="flex"
            alignItems="center"
            bg="none"
            color="text"
          >
            <Icon as={FaHtml5} mr={2} boxSize={4} />
            HTML
          </Badge>
          <Badge
            p={2}
            borderRadius="md"
            display="flex"
            alignItems="center"
            bg="none"
            color="text"
          >
            <Icon as={FaCss3Alt} mr={2} boxSize={4} />
            CSS
          </Badge>
          <Badge
            p={2}
            borderRadius="md"
            display="flex"
            alignItems="center"
            bg="none"
            color="text"
          >
            <Icon as={SiBootstrap} mr={2} boxSize={4} />
            Bootstrap
          </Badge>
          <Badge
            p={2}
            borderRadius="md"
            display="flex"
            alignItems="center"
            bg="none"
            color="text"
          >
            <Icon as={FaJs} mr={2} boxSize={4} />
            JavaScript
          </Badge>
          <Badge
            p={2}
            borderRadius="md"
            display="flex"
            alignItems="center"
            bg="none"
            color="text"
          >
            <Icon as={FaJs} mr={2} boxSize={4} />
            TypeScript
          </Badge>
          <Badge
            p={2}
            borderRadius="md"
            display="flex"
            alignItems="center"
            bg="none"
            color="text"
          >
            <Icon as={FaReact} mr={2} boxSize={4} />
            React
          </Badge>
          <Badge
            p={2}
            borderRadius="md"
            display="flex"
            alignItems="center"
            bg="none"
            color="text"
          >
            <Icon as={SiReact} mr={2} boxSize={4} />
            React Native
          </Badge>
          <Badge
            p={2}
            borderRadius="md"
            display="flex"
            alignItems="center"
            bg="none"
            color="text"
          >
            <Icon as={FaNodeJs} mr={2} boxSize={4} />
            Node.js
          </Badge>
          <Badge
            p={2}
            borderRadius="md"
            display="flex"
            alignItems="center"
            bg="none"
            color="text"
          >
            <Icon as={FaServer} mr={2} boxSize={4} />
            Express
          </Badge>
          <Badge
            p={2}
            borderRadius="md"
            display="flex"
            alignItems="center"
            bg="none"
            color="text"
          >
            <Icon as={MdApi} mr={2} boxSize={4} />
            REST API
          </Badge>
          <Badge
            p={2}
            borderRadius="md"
            display="flex"
            alignItems="center"
            bg="none"
            color="text"
          >
            <Icon as={FaDatabase} mr={2} boxSize={4} />
            SQL
          </Badge>
          <Badge
            p={2}
            borderRadius="md"
            display="flex"
            alignItems="center"
            bg="none"
            color="text"
          >
            <Icon as={FaDatabase} mr={2} boxSize={4} />
            MongoDB
          </Badge>
          <Badge
            p={2}
            borderRadius="md"
            display="flex"
            alignItems="center"
            bg="none"
            color="text"
          >
            <Icon as={FaPython} mr={2} boxSize={4} />
            Python
          </Badge>
          <Badge
            p={2}
            borderRadius="md"
            display="flex"
            alignItems="center"
            bg="none"
            color="text"
          >
            <Icon as={FaJava} mr={2} boxSize={4} />
            Java
          </Badge>
          <Badge
            p={2}
            borderRadius="md"
            display="flex"
            alignItems="center"
            bg="none"
            color="text"
          >
            <Icon as={SiKotlin} mr={2} boxSize={4} />
            Kotlin
          </Badge>
          <Badge
            p={2}
            borderRadius="md"
            display="flex"
            alignItems="center"
            bg="none"
            color="text"
          >
            <Icon as={FaGitAlt} mr={2} boxSize={4} />
            Git
          </Badge>
          <Badge
            p={2}
            borderRadius="md"
            display="flex"
            alignItems="center"
            bg="none"
            color="text"
          >
            <Icon as={SiJira} mr={2} boxSize={4} />
            Jira
          </Badge>
        </Grid>
      </Box>
    </Container>
  );
}

export default Skills;
