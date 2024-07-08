import { Card, CardBody, Heading, Text, Box } from "@chakra-ui/react";
import { GiGraduateCap } from "react-icons/gi";

interface EducationCardProps {
    title: string;
    name: string;
    date: string;
}   

function EducationCard({title, name, date}: EducationCardProps) {
    return (
        <Card
            maxWidth="500px"
            boxShadow="xl"
            rounded="lg"
            overflow="hidden"
            mb={5}
            p={4}
            bgGradient="linear(to-bl, whiteAlpha.900, whiteAlpha.800)" // Subtle gradient to improve contrast
            border="1px solid" // Adding a border
            borderColor="primary" // Using primary color for the border
            _hover={{
                transform: 'scale(1.05)',
                transition: 'all 0.3s ease',
                boxShadow: '2xl'
            }}
        >
            <CardBody>
                <Box display="flex" alignItems="center">
                    
                    <Heading size="md" color="text">{title}</Heading>
                    
                </Box>

                <Text mt={2} fontSize="md" color="primary">{name}</Text>
                <Text fontSize="sm" color="primary">{date}</Text>
            </CardBody>
        </Card>
    );
}

export default EducationCard;
