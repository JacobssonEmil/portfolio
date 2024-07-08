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

const MedlemmaModal: React.FC<SmartHouseoModalProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bgColor='background' color='text' mr={2} ml={2}>
          <ModalHeader>Medlemma</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
            An app for managing your store memberships. With this app, users can easily collect, organize, and manage all their memberships in various stores efficiently. Users can also smoothly display their membership cards directly from their mobile when needed.</Text>
            <Stack marginTop="4" direction="row" wrap="wrap" spacing={2}>
              <Badge colorScheme="purple">Kotlin</Badge>
              <Badge colorScheme="blue">Jetpack Compose</Badge>
              <Badge colorScheme="red">Andriod Studio</Badge>
              <Badge colorScheme="pink">Firebase</Badge>
            </Stack>
          </ModalBody>
  
          <ModalFooter>
            <ButtonGroup spacing="2">
              <Link href='https://github.com/Stuhren/Medlemma' isExternal>
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

export default MedlemmaModal;
