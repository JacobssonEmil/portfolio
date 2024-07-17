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
    Button
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import PortfolioModal from './PortfolioModal';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

function ProjectCardPortfolio() {
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
                bgColor='background' // Solid background color for cleanliness
                color='text' // Text color from global settings
                height={350}
                width={350}
                display='flex'
                flexDirection='column'
                _hover={isMobile ? {} : {
                    transform: 'scale(1.05)',
                    transition: 'transform 0.3s ease-in-out',
                }}
            >
                <Image
                    src='/images/Portfolio.png'
                    alt='Portfolio Image'
                    objectFit='cover'
                    height={175}
                    maxWidth={350}
                />
                <Stack mt='0' spacing='3' p={5} height={120} overflow='hidden'>
                    <Heading size='md' onClick={onOpen} cursor='pointer' _hover={{
                        color: 'accent' // Hover color from global settings
                    }}>
                        {t('Portfolio Title')}
                    </Heading>
                    <Text>
                    {t('Portfolio Description')}
                    </Text>
                </Stack>

                <Flex flexGrow={1} />

                <CardFooter>
                    <Flex justifyContent="space-between" alignItems="center" width="100%">
                        <ButtonGroup spacing='2'>
                            <Link href='https://github.com/JacobssonEmil/portfolio' isExternal>
                                <Button
                                    leftIcon={<FaGithub />}
                                    variant='outline'
                                    color='text' // Ensures the button text is consistent
                                    size='sm'
                                    _hover={{
                                        borderColor: 'accent' // Hover state color from global settings
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
                                bgColor='primary' // Background color from global settings
                                color='background' // Text color from global settings
                                _hover={{
                                    bgColor: 'secondary' // Hover background color from global settings
                                }}
                            >
                                More Info
                            </Button>
                        </ButtonGroup>
                    </Flex>
                </CardFooter>
            </Card>
            <PortfolioModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        </>
    );
}

export default ProjectCardPortfolio;
