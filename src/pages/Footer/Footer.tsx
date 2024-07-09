import { Box, Container, Stack, Text, Icon, Link, VStack, HStack, Wrap, WrapItem } from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';
import { EmailIcon } from '@chakra-ui/icons';

const Footer = () => {
  return (
    <Box color='text'> {/* Consistent background and text color */}
      <Container as={Stack} maxW='1200px' py={10} mt={150} align="center">
        <VStack spacing={4}>
          
          
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
          <Text mt={0}>Contact me directly at: <Link href="mailto:emil@jacobsson.com" _hover={{ color: 'accent', textDecoration: 'underline' }}>emil@jacobsson.com</Link></Text>
        </VStack>
        <Box>
          <Text fontSize='sm' color='secondary'>
            © 2024 by Emil Jacobsson. All rights reserved.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
