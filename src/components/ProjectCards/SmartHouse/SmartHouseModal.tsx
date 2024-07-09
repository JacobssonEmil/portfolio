import React from 'react';
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
import { useTranslation } from 'react-i18next';

interface SmartHouseModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const SmartHouseModal: React.FC<SmartHouseModalProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bgColor='background' color='text' mr={2} ml={2}>
        <ModalHeader>{t('Smart Home Modal Title')}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>{t('Smart Home Modal Description')}</Text>
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
                <Text marginLeft="2">{t('Github')}</Text>
              </Flex>
            </Link>
          </ButtonGroup>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default SmartHouseModal;
