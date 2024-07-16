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

interface MedlemmaModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const BookDBModal: React.FC<MedlemmaModalProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bgColor='background' color='text' mr={2} ml={2}>
        <ModalHeader>{t('BookDB Modal Title')}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>{t('BookDB Modal Description')}</Text>
          <Stack marginTop="4" direction="row" wrap="wrap" spacing={2}>
            <Badge colorScheme="blue">React Native</Badge>
            <Badge colorScheme="purple">react native Async Storage</Badge>
          </Stack>
        </ModalBody>
        <ModalFooter>
          <ButtonGroup spacing="2">
            <Link href='https://github.com/Ludde94/BookDB' isExternal>
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

export default BookDBModal;
