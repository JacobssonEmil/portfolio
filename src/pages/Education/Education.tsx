import { Box, Flex, Container, Heading, chakra, Text } from '@chakra-ui/react';
import EducationCard from '../../components/EducationCard/EducationCard';
import { FaGraduationCap } from 'react-icons/fa';

function Education() {
    return (
        <Container maxWidth="1200px" marginTop="200px">
            <Box mb={50}>
                <Heading size="lg" color='text'> {/* Updated to global text color */}
                    <chakra.span
                        borderBottom="3px solid" 
                        borderColor={"accent"}
                        display="inline-block"
                        paddingBottom="4px"
                    >
                        <Flex><Box mt={1}><FaGraduationCap color='text'/></Box> {/* Updated icon color to text */}
                        <Text ml={2} color='text'>Education</Text> {/* Updated text color */}
                        </Flex>
                    </chakra.span>
                </Heading>
            </Box>
            
            <EducationCard/>

        </Container>
    );
}

export default Education;
