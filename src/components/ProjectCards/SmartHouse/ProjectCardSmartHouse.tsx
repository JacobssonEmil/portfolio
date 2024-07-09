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
import SmartHouseModal from './SmartHouseModal';
import { useEffect, useState } from 'react';

function ProjectCardSmartHouse() {
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
                bgColor='background' // Solid background color for a cleaner look
                color='text' // Text color from global settings
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
                    src='/images/SmartHouse.jpg'
                    alt='Smart House'
                    objectFit='cover'
                    height={175}
                    maxWidth={350}
                />
                <Stack mt='0' spacing='3' p={5} height='120px' overflow='hidden'>
                    <Heading size='md' onClick={onOpen} cursor='pointer' _hover={{
                        color: 'accent' // Hover color from global settings
                    }}>
                        Smart Home
                    </Heading>
                    <Text>
                        A website and mobile app for remotely controlling devices in a prototype house.
                    </Text>
                </Stack>

                <Flex flexGrow={1} />

                <CardFooter>
                    <Flex justifyContent="space-between" alignItems="center" width="100%">
                        <ButtonGroup spacing='2'>
                            <Link href='https://github.com/SoftwareEngineering-Group2' isExternal>
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
                                color='text' // Text color from global settings
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
            <SmartHouseModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        </>
    );
}

export default ProjectCardSmartHouse;
