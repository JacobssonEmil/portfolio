import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Link,
  Badge,
  ButtonGroup,
  Flex,
  Stack,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

interface SmartHouseoModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const SmartHouseModal: React.FC<SmartHouseoModalProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bgColor='background' color='text' mr={2} ml={2}>
          <ModalHeader>Smart Home</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
            A website and mobile app for remotely controlling devices in a prototype house. Users can access an intuitive interface to control the house’s lighting, windows, and security systems, as well as to monitor sensor information from the house. The system facilitates two-way communication, allowing data to be sent from the application to the smart house as well as reading and sending sensor data back to the app, all from one single location.            </Text>
            <Stack marginTop="4" direction="row" wrap="wrap" spacing={2}>
              <Badge colorScheme="green">JavaScript</Badge>
              <Badge colorScheme="purple">TypeScript</Badge>
              <Badge colorScheme="blue">Python</Badge>
              <Badge colorScheme="red">Java</Badge>
              <Badge colorScheme="pink">React</Badge>
              <Badge colorScheme="yellow">NodeJS</Badge>
              <Badge colorScheme="orange">Firebase</Badge>
            </Stack>
          </ModalBody>
  
          <ModalFooter>
            <ButtonGroup spacing="2">
              <Link href='https://github.com/SoftwareEngineering-Group2' isExternal>
                <Flex align="center">
                  <FaGithub size="30"/>
                  <Text marginLeft="2">Github</Text>
                </Flex>
              </Link>
            </ButtonGroup>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default SmartHouseModal;
