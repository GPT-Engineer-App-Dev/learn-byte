import { Container, VStack, Heading, Text, Button, Box, Image } from "@chakra-ui/react";
import { FaCode, FaLaptopCode, FaChalkboardTeacher } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.lg" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to CodeMaster
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Your ultimate platform to learn coding online. Start your journey with us today!
        </Text>
        <Box display="flex" justifyContent="center" alignItems="center" flexWrap="wrap" gap={6}>
          <Box textAlign="center">
            <FaCode size="3em" />
            <Text mt={2}>Learn to Code</Text>
          </Box>
          <Box textAlign="center">
            <FaLaptopCode size="3em" />
            <Text mt={2}>Practice Projects</Text>
          </Box>
          <Box textAlign="center">
            <FaChalkboardTeacher size="3em" />
            <Text mt={2}>Expert Instructors</Text>
          </Box>
        </Box>
        <Button colorScheme="teal" size="lg">
          Get Started
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;