import { Box, Container, Flex, Heading, chakra, Text, Image } from '@chakra-ui/react';
import Technologies from '../../components/TechIcons/TechIcons';
import { FaScrewdriverWrench } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';

function Skills() {
    const { t } = useTranslation();

    return (
        <Container maxWidth="1200px" marginTop="200px">
            <Heading size="lg" color='text'>
                <chakra.span
                    borderBottom="3px solid"
                    borderColor={'accent'}
                    display="inline-block"
                    paddingBottom="4px"
                >
                    <Flex>
                        <Box mt={1}><FaScrewdriverWrench color="text" /></Box>
                        <Text ml={2} color="text">{t('Technologies and Tools Title')}</Text>
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
                <Box color='text' textAlign={'center'} mt={{ base: 0, md: 10 }}>
                    <Technologies />
                    <Text mt={10}>{t('Skills 1')}</Text>
                    <Text>{t('Skills 2')}</Text>
                    <Text>{t('Skills 3')}</Text>
                </Box>
            </Flex>
        </Container>
    );
}

export default Skills;
