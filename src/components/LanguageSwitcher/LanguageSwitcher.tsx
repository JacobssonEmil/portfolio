import { Menu, MenuButton, MenuList, MenuItem, Image, Box, Flex, Text } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const getFlagByLang = (lang: string) => {
    switch (lang) {
      case 'sv':
        return "https://upload.wikimedia.org/wikipedia/en/4/4c/Flag_of_Sweden.svg";
      case 'en':
      default:
        return "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg";
    }
  };

  return (
    <Menu>
            <MenuButton mr={5} _hover={{
                textDecoration: 'underline',
                textDecorationColor: 'accent',
                color: 'accent',
                textDecorationThickness: '2px'
                }}>
            <Box as="span" display="flex" alignItems="center">
            <Image boxSize={5} src={getFlagByLang(currentLanguage)} alt='Current Language' mr={1} mt={[0, 1]}  />
            Language
              <ChevronDownIcon boxSize={6}></ChevronDownIcon>
              </Box>
            </MenuButton>
            <MenuList color='text' bg={'background'}>

                <Text onClick={() => changeLanguage('en')} _hover={{
                textDecoration: 'underline',
                textDecorationColor: 'accent',
                textDecorationThickness: '2px'
                }}>

                    <MenuItem bg={'background'}><Flex marginEnd={2}> <Image boxSize={5} src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" alt="USA Flag"   mt={[0, 1]}  /></Flex><Text>English</Text></MenuItem>
                
                </Text>

                <Text onClick={() => changeLanguage('sv')} _hover={{
                textDecoration: 'underline',
                textDecorationColor: 'accent',
                textDecorationThickness: '2px'
                }}>
                    <MenuItem bg={'background'}><Flex marginEnd={2}><Image boxSize={5} src="https://upload.wikimedia.org/wikipedia/en/4/4c/Flag_of_Sweden.svg" alt="Swedish Flag"  mt={[0, 1]}  /></Flex><Text>Svenska</Text></MenuItem> 
                </Text>
            
            </MenuList>
          </Menu>
  );
}

export default LanguageSwitcher;
