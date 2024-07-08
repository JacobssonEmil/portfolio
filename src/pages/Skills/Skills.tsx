import { Box, Container, Flex, Heading, chakra, Text, Image } from '@chakra-ui/react';
import Technologies from '../../components/TechIcons/TechIcons';
import { FaScrewdriverWrench } from 'react-icons/fa6';

function Skills() {
    return [
        <Container maxWidth="1200px" marginTop="200px">
            <Heading size="lg" color='text'> {/* Updated text color */}
                <chakra.span
                    borderBottom="3px solid"
                    borderColor={'accent'}
                    display="inline-block"
                    paddingBottom="4px"
                >
                    <Flex>
                        <Box mt={1}><FaScrewdriverWrench color="text" /></Box> {/* Updated icon color */}
                        <Text ml={2} color="text">Technologies and Tools</Text> {/* Updated text color */}
                    </Flex>
                </chakra.span>
            </Heading>

            <Flex 
                direction={{ base: "column", xl: "row" }}
                wrap="wrap"
                justifyContent={{ base: "center", md: "space-between" }}
                mt={4}
                alignItems="center"
            >
                <Image mt={10} mb={10} src='/images/Skills.gif' alt='Skills' maxBlockSize="400px" objectFit="cover" />
                <Box color='text' textAlign={'center'} mt={{ base: 0, md: 10 }}> {/* Updated text color */}
                    <Technologies/>
                    <Text mt={10}>⭐ Building responsive web applications (SPA) in React.js.</Text>
                    <Text>⭐ Building mobile applications in Kotlin and Jetpack Compose.</Text>
                    <Text>⭐ Building APIs in JavaScript and Node.js.</Text>
                </Box>
            </Flex>
        </Container>
    ];
}

export default Skills;
