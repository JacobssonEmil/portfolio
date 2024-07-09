import { Heading, Text, Flex, Link, ButtonGroup, Card, CardFooter, Stack, Image, useDisclosure, Button } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import MedlemmaModal from './MedlemmaModal';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

function ProjectCardMedlemma() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const { t } = useTranslation();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <Card
                maxW='sm'
                boxShadow='base'
                rounded='lg'
                mt={50}
                overflow="hidden"
                bgColor='background'
                color='text'
                height={350}
                maxWidth={350}
                display='flex'
                flexDirection='column'
                _hover={isMobile ? {} : {
                    transform: 'scale(1.05)',
                    transition: 'transform 0.3s ease-in-out',
                }}
            >
                <Image
                    src='/images/Android.jpg'
                    alt={t('Medlemma Title')}
                    objectFit='cover'
                    height={175}
                    maxWidth={350}
                />
                <Stack mt='0' spacing='3' p={5} height={120} overflow='hidden'>
                    <Heading size='md' onClick={onOpen} cursor='pointer' _hover={{
                        color: 'accent'
                    }}>
                        {t('Medlemma Title')}
                    </Heading>
                    <Text>
                        {t('Medlemma Description')}
                    </Text>
                </Stack>

                <Flex flexGrow={1} />

                <CardFooter>
                    <Flex justifyContent="space-between" alignItems="center" width="100%">
                        <ButtonGroup spacing='2'>
                            <Link href='https://github.com/Stuhren/Medlemma' isExternal>
                                <Button
                                    leftIcon={<FaGithub />}
                                    variant='outline'
                                    color='text'
                                    size='sm'
                                    _hover={{
                                        borderColor: 'accent'
                                    }}
                                >
                                    GitHub
                                </Button>
                            </Link>
                        </ButtonGroup>
                        <ButtonGroup spacing='2' justifySelf="flex-end">
                            <Button
                                onClick={onOpen}
                                size='sm'
                                bgColor='primary'
                                color='background'
                                _hover={{
                                    bgColor: 'secondary'
                                }}
                            >
                                More Info
                            </Button>
                        </ButtonGroup>
                    </Flex>
                </CardFooter>
            </Card>
            <MedlemmaModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        </>
    );
}

export default ProjectCardMedlemma;
