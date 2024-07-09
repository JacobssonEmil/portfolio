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
import MedlemmaModal from './MedlemmaModal';
import { useEffect, useState } from 'react';

function ProjectCardMedlemma() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

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
                bgColor='background' // Use solid background color for a cleaner look
                color='text' // Using global text color
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
                    alt='Smart House'
                    objectFit='cover'
                    height={175}
                    maxWidth={350}
                />
                <Stack mt='0' spacing='3' p={5} height={120} overflow='hidden'>
                    <Heading size='md' onClick={onOpen} cursor='pointer' _hover={{
                        color: 'accent' // Use accent color for hover on heading
                    }}>
                        Medlemma
                    </Heading>
                    <Text>
                        An app to manage your store memberships.
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
                                    color='text' // Button text uses global text color
                                    size='sm'
                                    _hover={{
                                        borderColor: 'accent' // Hover state uses global accent color
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
                                bgColor='primary' // Use primary color for button
                                color='background' // Button text uses global text color
                                _hover={{
                                    bgColor: 'secondary' // Hover state uses secondary color
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
