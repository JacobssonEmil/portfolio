import { EmailIcon } from '@chakra-ui/icons';
import { Box, Container, Heading, Text, Flex, Link, Highlight, Icon } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function About() {
    return (
        <Container maxWidth="600px" marginTop="200px" color={'#EEEEEE'}>
            <Box textAlign="center" >
                <Heading size="3xl">Emil J.</Heading>
                <Text marginTop="8" fontSize="2xl">
                    <Highlight query={['fullstack developer', 'responsive', 'user-friendly applications']} styles={{ px: '2', py: '0', rounded: 'full', bgGradient: 'linear(to-r, #6EE7B7, #00ADB5, #3B82F6)', color: '#222831' }}>
                        {"I am a passionate fullstack developer from Sweden, who enjoys creating responsive and user-friendly applications. Always eager to learn new technologies and apply them in projects."}
                    </Highlight>
                </Text>
                <Box marginTop={10}>
                    <Flex justifyContent="center">
                        <Link href='https://www.linkedin.com/in/emiljacobsson/' isExternal> <Icon as={FaLinkedin} boxSize={6} color={'#EEEEEE'} _hover={{ color: '#393E46' }} mr={10}/></Link>
                        <Link href='https://github.com/JacobssonEmil' isExternal> <Icon as={FaGithub} boxSize={6} color={'#EEEEEE'} _hover={{ color: '#393E46' }} mr={10}/></Link>
                        <Link href="mailto:emil@jacobsson.com" isExternal><Icon as={EmailIcon} boxSize={6} color={'#EEEEEE'} _hover={{ color: '#393E46' }}/></Link>
                    </Flex>
                </Box>
            </Box>

            

        </Container>
    );
}

export default About;
