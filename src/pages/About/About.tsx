import { EmailIcon } from '@chakra-ui/icons';
import { Box, Container, Heading, Text, Flex, Link, Icon } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

function About() {
    const { t } = useTranslation();

    return (
        <Container maxWidth="600px" mt="200px" color="text">

            <Box textAlign="center">
                <Heading size="2xl" color="text" mb={4}>Emil J.</Heading>
                <Text fontSize="xl" mb={6}>
                    {t('About Introduction')}
                </Text>
                <Flex justifyContent="center" mt={4} gap={6}>
                    <Link href='https://www.linkedin.com/in/emiljacobsson/' isExternal>
                        <Icon as={FaLinkedin} boxSize={7} color='primary' _hover={{ color: 'accent', transform: 'scale(1.1)' }} />
                    </Link>
                    <Link href='https://github.com/JacobssonEmil' isExternal>
                        <Icon as={FaGithub} boxSize={7} color='primary' _hover={{ color: 'accent', transform: 'scale(1.1)' }} />
                    </Link>
                    <Link href="mailto:emil@jacobsson.com" isExternal>
                        <Icon as={EmailIcon} boxSize={7} color='primary' _hover={{ color: 'accent', transform: 'scale(1.1)' }} />
                    </Link>
                </Flex>
            </Box>
        </Container>
    );
}

export default About;
