import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Image,
  Text,
  Stack,
  HStack,
  Button,
  Center,
  Spinner,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { useProductStore } from "../store/product";

const ProductCard = ({ product, onEdit, onDelete }) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      shadow="md"
      rounded="md"
      overflow="hidden"
    >
      {product.image && (
        <Image
          src={product.image}
          alt={product.name}
          objectFit="cover"
          w="100%"
          h="200px"
        />
      )}
      <Box p={4}>
        <Stack spacing={2}>
          <Heading as="h3" size="md">
            {product.name}
          </Heading>
          <Text fontWeight="bold">${Number(product.price).toFixed(2)}</Text>
          {product.description && (
            <Text noOfLines={2} color="gray.500">
              {product.description}
            </Text>
          )}
          <HStack spacing={2} pt={2}>
            <Button
              size="sm"
              leftIcon={<FaEdit />}
              colorScheme="blue"
              variant="outline"
              onClick={() => onEdit(product)}
            >
              Edit
            </Button>
            <Button
              size="sm"
              leftIcon={<FaTrashAlt />}
              colorScheme="red"
              variant="outline"
              onClick={() => onDelete(product)}
            >
              Delete
            </Button>
          </HStack>
        </Stack>
      </Box>
    </Box>
  );
};

const HomePage = () => {
  const toast = useToast();
  const { products, fetchProducts, deleteProduct, updateProduct } = useProductStore();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const load = async () => {
      const res = await fetchProducts();
      if (!res.success) {
        setError(res.message || "Unable to load products.");
      }
      setLoading(false);
    };
    load();
  }, [fetchProducts]);

  const handleDelete = async (product) => {
    const id = product._id || product.id;
    if (!window.confirm(`Delete "${product.name}" ?`)) return;
    const res = await deleteProduct(id);
    toast({
      title: res.success ? "Deleted" : "Error",
      description: res.message,
      status: res.success ? "success" : "error",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleEdit = async (product) => {
    const id = product._id || product.id;
    const name = window.prompt("Name:", product.name);
    if (name === null) return;
    const priceStr = window.prompt("Price:", product.price);
    if (priceStr === null) return;
    const image = window.prompt("Image URL:", product.image || "");
    if (image === null) return;
    const description = window.prompt("Description:", product.description || "");
    if (description === null) return;
    const price = Number(priceStr);
    const res = await updateProduct(id, { name, price, image, description });
    toast({
      title: res.success ? "Updated" : "Error",
      description: res.message,
      status: res.success ? "success" : "error",
      duration: 3000,
      isClosable: true,
    });
  };

  if (loading) {
    return (
      <Center py={20}>
        <Spinner size="xl" />
      </Center>
    );
  }

  if (error) {
    return (
      <Center py={20}>
        <Text color="red.400">{error}</Text>
      </Center>
    );
  }

  return (
    <Container maxW="6xl" py={8}>
      <Heading
        as="h1"
        size="xl"
        textAlign="center"
        mb={8}
        color={useColorModeValue("blue.500", "cyan.300")}
      >
        Current Images Available
      </Heading>

      {products.length === 0 ? (
        <Center py={16}>
          <Text color="gray.500">No products yet. Create one to get started.</Text>
        </Center>
      ) : (
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={6}>
          {products.map((product) => (
            <ProductCard
              key={product._id || product.id}
              product={product}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </SimpleGrid>
      )}
    </Container>
  );
};

export default HomePage
