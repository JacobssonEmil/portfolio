// src/components/Navbar/Navbar.tsx
import { useTranslation } from 'react-i18next';
import { Box, Flex, Text, IconButton, HStack, Stack, useDisclosure,  Container, Avatar, Menu, MenuButton, MenuItem, MenuList, Link } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon, EmailIcon } from '@chakra-ui/icons';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

const Navbar = () => {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const Links = [
    { name: t('About'), ref: 'about' },
    { name: t('Education'), ref: 'education' },
    { name: t('Projects'), ref: 'projects' },
    { name: t('Technologies and Tools'), ref: 'skills' },
    { name: t('Contact'), ref: 'footer' }
  ];

  return (
    <Container
      borderBottom="1px solid"
      borderColor={'primary'}
      maxWidth={'1400px'}
      color='text'
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="1000"
      bg="background"
    >
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon boxSize="24px" />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
          variant="ghost"
          backgroundColor="transparent"
          _hover={{ bg: 'transparent' }}
          _active={{ bg: 'transparent' }}
          _focus={{ boxShadow: 'none' }}
          color="text"
        />
        <HStack spacing={8} alignItems={'center'}>
          <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
            {Links.map(link => (
              <Box
                as="a"
                href={`#${link.ref}`}
                p={2}
                rounded={'md'}
                _hover={{
                  textDecoration: 'underline',
                  textDecorationColor: 'accent',
                  textDecorationThickness: '2px'
                }}
                color="text"
              >
                {link.name}
              </Box>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems={'center'}>
          <LanguageSwitcher/>
          <Menu>
            <MenuButton>
              <Avatar size='sm' name='Emil Jacobsson' src='/images/Profilbild.jpeg' />
              <ChevronDownIcon boxSize={6} mt={1}></ChevronDownIcon>
            </MenuButton>
            <MenuList color='text' bg={'background'}>
              {/* Link entries updated to use translation */}
              <Link href='https://www.linkedin.com/in/emiljacobsson/' isExternal _hover={{
                textDecoration: 'underline',
                textDecorationColor: 'accent',
                textDecorationThickness: '2px'
              }}>
                <MenuItem bg={'background'}>
                  <Flex marginEnd={2}><FaLinkedin color='#0A66C2' /></Flex><Text>{t('Linkedin')}</Text>
                </MenuItem>
              </Link>
              <Link href='https://github.com/JacobssonEmil' isExternal _hover={{
                textDecoration: 'underline',
                textDecorationColor: 'accent',
                textDecorationThickness: '2px'
              }}>
                <MenuItem bg={'background'}>
                  <Flex marginEnd={2}><FaGithub color='#181717' /></Flex><Text>{t('Github')}</Text>
                </MenuItem>
              </Link>
              <Link href="mailto:emil@jacobsson.com" isExternal _hover={{
                textDecoration: 'underline',
                textDecorationColor: 'accent',
                textDecorationThickness: '2px'
              }}>
                <MenuItem bg={'background'}>
                  <EmailIcon marginTop={1} marginEnd={2} color='text' /><Text>{t('Email')}</Text>
                </MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
      {isOpen && (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {Links.map(link => (
              <Box
                as="a"
                href={`#${link.ref}`}
                p={2}
                rounded={'md'}
                _hover={{
                  textDecoration: 'underline',
                  textDecorationColor: 'accent',
                  textDecorationThickness: '2px'
                }}
                color="text"
              >
                {link.name}
              </Box>
            ))}
          </Stack>
        </Box>
      )}
    </Container>
  );
};

export default Navbar;
