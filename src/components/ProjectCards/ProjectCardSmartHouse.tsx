import {
    Box,
    Container,
    Heading,
    Text,
    Flex,
    Link,
    chakra,
    ButtonGroup,
    Card,
    CardBody,
    CardFooter,
    Divider,
    Stack,
    Image,
    Badge,
    Highlight,
    useDisclosure
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import MedlemmaModal from './MedlemmaModal';

function ProjectCardSmartHouse() {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <><Card maxW='sm' mt={50} overflow="hidden" bg={'#393E46'} height={350} width={350} display='flex' flexDirection='column' _hover={{
            transform: 'scale(1.05)',
            transition: 'transform 0.3s ease-in-out',
        }}>
            <Image
                src='/images/Android.jpg'
                alt='Smart House'
                objectFit={'cover'}
                height={175}
            />

            <Stack mt='0' spacing='3' p={5} height={120} overflow={'hidden'}>
                <Heading size='md' color={'#EEEEEE'} onClick={onOpen}><Link _hover={{
                    textDecoration: 'underline',
                    textDecorationColor: '#00ADB5',
                    textDecorationThickness: '2px'
                }}>Medlemma</Link></Heading>
                <Text color={'#EEEEEE'}>
                    An app to manage your store memberships.
                </Text>
            </Stack>

            {/* Ensuring that the footer sticks to the bottom */}
            <Flex flexGrow={1} />

            <CardFooter>
                <Flex justifyContent="space-between" width="100%">
                    <ButtonGroup spacing='2'>
                        <Link href='https://github.com/JacobssonEmil' isExternal>
                            <Flex>
                                <FaGithub size="30" color="white" />
                                <Link marginLeft={2} color="white">Github</Link>
                            </Flex>
                        </Link>
                    </ButtonGroup>
                    <ButtonGroup spacing='2'>
                        <Link onClick={onOpen} isExternal>
                            <Link color={'#00ADB5'} _hover={{
                    textDecoration: 'underline',
                    textDecorationColor: '#00ADB5',
                    textDecorationThickness: '2px'
                }}>More Info</Link>
                        </Link>
                    </ButtonGroup>
                </Flex>
            </CardFooter>
        </Card><div>

                <MedlemmaModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
            </div></>
    );
}

export default ProjectCardSmartHouse;
