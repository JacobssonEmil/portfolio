import { Box, Container, Stack, Text, Icon, Link, VStack, HStack, Wrap, WrapItem } from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';
import { EmailIcon } from '@chakra-ui/icons';

const Footer = () => {
  return (
    <Box color='text'> {/* Consistent background and text color */}
      <Container as={Stack} maxW='1200px' py={10} mt={150} align="center">
        <VStack spacing={4}>
          <Wrap justify="center" spacingX="40px">
            <WrapItem>
              <Link href="#about" _hover={{ color: 'accent', textDecoration: 'underline' }}>About</Link>
            </WrapItem>
            <WrapItem>
              <Link href="#education" _hover={{ color: 'accent', textDecoration: 'underline' }}>Education</Link>
            </WrapItem>
            <WrapItem>
              <Link href="#projects" _hover={{ color: 'accent', textDecoration: 'underline' }}>Projects</Link>
            </WrapItem>
            <WrapItem>
              <Link href="#skills" _hover={{ color: 'accent', textDecoration: 'underline' }}>Technologies and Tools</Link>
            </WrapItem>
          </Wrap>
          <Text mt={5}>Contact me directly at: <Link href="mailto:emil@jacobsson.com" _hover={{ color: 'accent', textDecoration: 'underline' }}>emil@jacobsson.com</Link></Text>
          <HStack spacing={8}>
            <Link href="https://github.com/JacobssonEmil" isExternal>
              <Icon as={FaGithub} boxSize={7} color='primary' _hover={{ color: 'accent', transform: 'scale(1.1)' }} />
            </Link>
            <Link href="https://www.linkedin.com/in/emiljacobsson/" isExternal>
              <Icon as={FaLinkedin} boxSize={7} color='primary' _hover={{ color: 'accent', transform: 'scale(1.1)' }} />
            </Link>
            <Link href="mailto:emil@jacobsson.com" isExternal>
              <EmailIcon boxSize={7} color='primary' _hover={{ color: 'accent', transform: 'scale(1.1)' }} />
            </Link>
            <Link href="tel:+1234567890">
              <Icon as={FaPhone} boxSize={7} color='primary' _hover={{ color: 'accent', transform: 'scale(1.1)' }} />
            </Link>
          </HStack>
        </VStack>
        <Box pt={5}>
          <Text fontSize='sm' color='secondary'>
            © 2024 by Emil Jacobsson. All rights reserved.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
