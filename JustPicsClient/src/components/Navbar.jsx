import { Box, Container, Flex, HStack, Text, Button, useColorMode } from '@chakra-ui/react'
import { PlusSquareIcon } from "@chakra-ui/icons";
import { Link } from 'react-router-dom'
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";



const Navbar = () => {
  const { toggleColorMode , colorMode} = useColorMode();

  return (
    <Box 
      w="100%"                // full width banner
      bg={colorMode === "light" ? "gray.100" : "gray.900"} 
      px={4}
      boxShadow="sm" 
    >
      <Container maxW="1140px">
        <Flex 
          h={16} 
          alignItems="center" 
          justifyContent="space-between" 
          flexDir={{ base: "column", sm: "row" }}
        >
          
          <Text 
            fontSize={{ base: "22", sm: "28" }} 
            fontWeight="bold" 
            textTransform="uppercase"
            textAlign="center"
            bgGradient="linear(to-r, cyan.400, blue.500)"
            bgClip="text"
          >
            <Link to="/">JustPics</Link>
          </Text>

          <HStack spacing={2} alignItems="center">
            <Link to="/create">
              <Button>
                <PlusSquareIcon fontSize="20" />
              </Button>
            </Link>

            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <IoMoon /> : <LuSun size="20" />}
            </Button> 
          </HStack>

        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar
