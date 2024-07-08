import { Box, Image, Tooltip, Wrap, WrapItem } from '@chakra-ui/react';

const TechIcons = () => {
  const icons = [
    { src: './images/JavaScript.png', alt: 'JavaScript' },
    { src: './images/React.png', alt: 'React' },
    { src: './images/Nodejs.png', alt: 'Node.js' },
    { src: './images/Python.png', alt: 'Python' },
    { src: './images/MySQL.png', alt: 'MySQL' },
    { src: './images/MongoDB.png', alt: 'MongoDB' },
    { src: './images/Git.png', alt: 'Git' },
    { src: './images/Jira.png', alt: 'Jira' },
    { src: './images/Bootstrap.png', alt: 'Bootstrap' },
    { src: './images/Kotlin.png', alt: 'Kotlin' },
  ];

  return (
    <Wrap spacing={'30'} justify="center" maxW={600}>
      {icons.map((icon, index) => (
        <Tooltip label={icon.alt} key={index} hasArrow>
          <WrapItem>
            <Box p="4" boxShadow='base' rounded='md' bg="background" borderRadius="50"> {/* Updated background color */}
              <Image src={icon.src} alt={icon.alt} boxSize={8}/>
            </Box>
          </WrapItem>
        </Tooltip>
      ))}
    </Wrap>
  );
};

export default TechIcons;
