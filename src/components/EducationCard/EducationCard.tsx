import {
  Box,
  chakra,
  Container,
  Text,
  HStack,
  VStack,
  Flex,
  useBreakpointValue,
  Heading
} from '@chakra-ui/react';

const colors = {
  text: '#111313',
  background: '#fcfdfd',
  primary: '#7a8e99',
  secondary: '#a8bac2',
  accent: '#8fabb7',
};
import { useTranslation } from 'react-i18next';


function EducationCard() {
  const { t } = useTranslation();
  const milestones = [
  {
    id: 1,
    date: 'Aug 2021 - Jun 2024',
    title: t('Bachelor Program in Software Development'),
    description: t('University Kristianstad')
  },
  {
    id: 2,
    date: 'Aug 2017 - Jun 2020',
    title: t('Technology Program'),
    description: t('NTI High School')
  }
];
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <Container maxWidth="1200px" p={0} m="0 auto" // Remove padding and set margin auto for center alignment
      sx={{
        width: '100%', // Ensures the container tries to use the full width available
        maxW: '1200px' // Ensures the container does not exceed 1200px
      }}
    >
      {milestones.map((milestone) => (
        <Flex key={milestone.id} mb="10px" w="full" // Ensure each Flex uses the full width
        >
          {/* Conditional rendering based on the device type */}
          {isDesktop && milestone.id % 2 === 0 && (
            <>
              <EmptyCard />
              <LineWithDot />
              <Card {...milestone} />
            </>
          )}

          {isMobile && (
            <>
              <LineWithDot />
              <Card {...milestone} />
            </>
          )}

          {isDesktop && milestone.id % 2 !== 0 && (
            <>
              <Card {...milestone} />
              <LineWithDot />
              <EmptyCard />
            </>
          )}
        </Flex>
      ))}
    </Container>
  );
}

interface CardProps {
  id: number;
  title: string;
  description: string;
  date: string;
}

const Card = ({ id, title, description, date }: CardProps) => {
  const isEvenId = id % 2 === 0;
  let borderWidthValue = isEvenId ? '15px 15px 15px 0' : '15px 0 15px 15px';
  let leftValue = isEvenId ? '-15px' : 'unset';
  let rightValue = isEvenId ? 'unset' : '-15px';

  const isMobile = useBreakpointValue({ base: true, md: false });
  if (isMobile) {
    leftValue = '-15px';
    rightValue = 'unset';
    borderWidthValue = '15px 15px 15px 0';
  }

  return (
    <HStack
      flex={1}
      p={{ base: 3, sm: 6 }}
      bg={colors.background}
      spacing={5}
      rounded="lg"
      alignItems="center"
      pos="relative"
      boxShadow="base"
      _before={{
        content: `""`,
        w: '0',
        h: '0',
        borderColor: `transparent ${colors.background} transparent`,
        borderStyle: 'solid',
        borderWidth: borderWidthValue,
        position: 'absolute',
        left: leftValue,
        right: rightValue,
        display: 'block'
      }}
    >
      <Box>
        <Text fontSize="lg" color={colors.primary}>
          {date}
        </Text>

        <VStack spacing={2} mb={3} align="left">
  <Heading  size='md'  lineHeight={1.2} fontWeight="bold" w="100%" color={colors.text}>
    {title}
  </Heading>
  <Text fontSize="md" color={colors.primary} textAlign="left">{description}</Text>
</VStack>

      </Box>
    </HStack>
  );
};

const LineWithDot = () => {
  return (
    <Flex
      pos="relative"
      alignItems="center"
      mr={{ base: '40px', md: '40px' }}
      ml={{ base: '0', md: '40px' }}
    >
      <chakra.span
        position="absolute"
        left="50%"
        height="calc(100% + 10px)"
        border="1px solid"
        borderColor={colors.primary}
        top="0px"
      ></chakra.span>
      <Box pos="relative" p="10px">
        <Box
          pos="absolute"
          top="0"
          left="0"
          bottom="0"
          right="0"
          width="100%"
          height="100%"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="center center"
          bg={colors.primary}
          borderRadius="100px"
          backgroundImage="none"
          opacity={1}
        ></Box>
      </Box>
    </Flex>
  );
};

const EmptyCard = () => {
  return <Box flex={{ base: 0, md: 1 }} p={{ base: 0, md: 6 }} bg="transparent"></Box>;
};

export default EducationCard;
