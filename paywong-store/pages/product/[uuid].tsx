import { ColorMix } from "@/theme/types";
import {
  Center,
  Stack,
  Image,
  VStack,
  Text,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
  HStack,
  Link,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const { query } = useRouter();
  useEffect(() => {
    //todo call api get store detail
    console.log("uuid", query.uuid);
  }, [query]);
  return (
    <VStack spacing={32} w="full" p="6" h="full">
      <Center w="full" mt={32}>
        <Image src="/images/turntableLabLogo.png" alt="" />
      </Center>
      <Stack
        w="full"
        spacing={36}
        direction={["row"]}
        justify="center"
        align="center"
      >
        <Image
          src="https://bit.ly/dan-abramov"
          alt=""
          w={96}
          h={96}
          rounded="2xl"
        />
        <VStack w="full" spacing={12} alignItems="flex-start" maxW={96}>
          <Text fontSize="xs" fontWeight="medium" textColor={ColorMix.textSub}>
            SKU123456789ABCDEF
          </Text>
          <VStack spacing={4} w="full" alignItems="flex-start">
            <Text
              fontSize="3xl"
              fontWeight="medium"
              textColor={ColorMix.textTitle}
            >
              Product Name
            </Text>
            <Text
              fontSize="xl"
              fontWeight="medium"
              textColor={ColorMix.textSub}
            >
              £199.00
            </Text>
            <Text
              fontSize="md"
              fontWeight="medium"
              textColor={ColorMix.textSub}
            >
              With a sleek design and a captivating essence, this is a modern
              Classic made for every occasion.
            </Text>
          </VStack>
          <VStack spacing={4} w="full" alignItems="flex-start">
            <FormControl>
              <FormLabel
                htmlFor="quantity"
                fontSize="sm"
                fontWeight="medium"
                color={ColorMix.textTitle}
              >
                Quantity
              </FormLabel>
              <NumberInput
                size="lg"
                value={quantity}
                onChange={(valueAsString) => setQuantity(Number(valueAsString))}
                min={1}
                step={1}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
          </VStack>
          <Button
            size="lg"
            variant="solid"
            fontSize="md"
            fontWeight="semibold"
            w="full"
          >
            Checkout
          </Button>
        </VStack>
      </Stack>
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

export default ProductDetail;
