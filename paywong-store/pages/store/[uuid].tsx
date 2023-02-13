import { ColorMix } from "@/theme/types";
import {
  Button,
  Center,
  Flex,
  HStack,
  Image,
  Link,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";

const StoreDetail = () => {
  const { query } = useRouter();
  useEffect(() => {
    //todo call api get store detail
    console.log("uuid", query.uuid);
  }, [query]);

  const renderItem = useCallback(() => {
    return (
      <Flex
        bg={ColorMix.bgItem}
        _hover={{
          bg: ColorMix.hover,
        }}
        p={[4, 6, 8]}
        h="fit-content"
        rounded="lg"
        justifyContent="center"
        flexDirection="column"
        w={"fit-content"}
        onClick={() => {
          window.location.href = "/product/1";
        }}
      >
        <VStack spacing={4} w="full" maxW={80} alignItems="flex-start">
          <Image
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
            maxW={80}
            maxH={60}
            rounded="2xl"
          />
          <Text fontSize="lg" fontWeight="normal" textColor={ColorMix.textHint}>
            Leather Mens Quartz Watch
          </Text>
          <Text
            fontSize="lg"
            fontWeight="medium"
            textColor={ColorMix.textImpotant}
          >
            $250
          </Text>
          <Button w="full" size="lg">
            View Product
          </Button>
        </VStack>
      </Flex>
    );
  }, []);

  return (
    <VStack spacing={32} w="full" p="6" h="full" justify={"center"}>
      <Center w="full" mt={32}>
        <Image src="/images/turntableLabLogo.png" alt="" />
      </Center>
      <SimpleGrid
        w="full"
        columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
        spacing={4}
        alignSelf="center"
        justifySelf="center"
        justifyItems="center"
        alignItems="center"
      >
        {renderItem()}
        {renderItem()}
        {renderItem()}
      </SimpleGrid>
      <HStack w="full" py="2" color={ColorMix.textHint} justify="center">
        <Link isExternal href="https://paywong.com">
          <HStack>
            <Text
              fontSize="xs"
              fontWeight="semibold"
              color={ColorMix.textHelper}
            >
              Powered by
            </Text>
            <Image src="/images/logo_gray.png" h={["16px", "20px"]} alt="" />
          </HStack>
        </Link>
      </HStack>
    </VStack>
  );
};

export default StoreDetail;
