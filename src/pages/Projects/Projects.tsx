import {
    Box,
    Container,
    Heading,
    Text,
    Flex,
    chakra,
    Center,
} from '@chakra-ui/react';

import ProjectCardMedlemma from '../../components/ProjectCards/Medlemma/ProjectCardMedlemma';
import ProjectCardSmartHouse from '../../components/ProjectCards/SmartHouse/ProjectCardSmartHouse';
import ProjectCardPortfolio from '../../components/ProjectCards/Portfolio/ProjectCardPortfolio';
import { FaCode } from 'react-icons/fa';



function Project() {
    return [
        <Container maxWidth="1200px" marginTop="190px">
            <Heading size="lg" color="text"> {/* Use global text color */}
                <chakra.span
                    borderBottom="3px solid" 
                    borderColor={'accent'}
                    display="inline-block"
                    paddingBottom="4px">
                    <Flex>
                        <Box mt={1}>
                            <FaCode color="text" /> {/* Use global text color */}
                        </Box>
                        <Text ml={2} color="text">Projects</Text> {/* Use global text color */}
                    </Flex>
                </chakra.span>
            </Heading>

            <Flex direction="row" wrap="wrap" justifyContent="center">
                <ProjectCardSmartHouse />
                <Center marginRight={{ base: "0", md: "59"}} marginLeft={{ base: "0", md: "59"}}>
                    <ProjectCardMedlemma />
                </Center>
                <ProjectCardPortfolio />
            </Flex>
        </Container>
    ];
}

export default Project;
