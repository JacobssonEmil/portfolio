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

const MedlemmaModal: React.FC<MedlemmaModalProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bgColor='background' color='text' mr={2} ml={2}>
        <ModalHeader>{t('Medlemma Modal Title')}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>{t('Medlemma Modal Description')}</Text>
          <Stack marginTop="4" direction="row" wrap="wrap" spacing={2}>
            <Badge colorScheme="purple">Kotlin</Badge>
            <Badge colorScheme="blue">Jetpack Compose</Badge>
            <Badge colorScheme="red">Android Studio</Badge>
            <Badge colorScheme="pink">Firebase</Badge>
          </Stack>
        </ModalBody>
        <ModalFooter>
          <ButtonGroup spacing="2">
            <Link href='https://github.com/Stuhren/Medlemma' isExternal>
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

export default MedlemmaModal;
