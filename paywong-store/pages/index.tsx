import {
  Button,
  Flex,
  Heading,
  Input,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

const Home = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" bg={formBackground}>
        <Heading mb={6}>Paywong Store</Heading>
        <Input placeholder="Email" mb={3} />
        <Input placeholder="Password" mb={6} />
        <Button colorScheme="teal" mb={6}>
          Login
        </Button>
        <Button onClick={toggleColorMode}>Toggle Color Mode</Button>
      </Flex>
    </Flex>
  );
};

export default Home;
