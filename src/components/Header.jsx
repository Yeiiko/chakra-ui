import { Box, Flex, Text, Button } from "@chakra-ui/react";
import ciclista from "../assets/ciclista.png";

export const Header = () => {
  return (
    <Flex flexDirection="column">
    <Flex
      mt="80px"
      width="1100px"
      bg={`url(${ciclista}) center`}
      justifyContent="center"
      h="250px"
      fontFamily="Helvetica"
    >
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        color="white"
        _hover={{ color: `black` }}
        w="600px"
      >
        <Text color="white" fontSize="30px">
          DOMINA EL TERRENO
        </Text>
        <Flex mt="10px" w="600px" justifyContent="center">
          <Button
            mr="10px"
            borderRadius="0px"
            bg="transparent"
            _hover={{ color: `black`, background: `white` }}
            color="white"
            border="1px"
            borderColor="#fff"
          >
            VER DETALLES
          </Button>
          <Button
            borderRadius="0px"
            bg="transparent"
            _hover={{ color: `black`, background: `white` }}
            color="white"
            border="1px"
            borderColor="#fff"
          >
            VER VIDEO
          </Button>
        </Flex>
      </Flex>
    </Flex>
  
    <Flex
      mt="80px"
      width="300px"
      bg={`url(${ciclista}) center `}
      justifyContent="center"
      h="250px"
      fontFamily="Helvetica"
    >
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        color="white"
        _hover={{ color: `black` }}
        w="600px"
      >
        <Text color="white" fontSize="25px">
          DOMINA EL TERRENO
        </Text>
        <Flex mt="10px" w="270px" justifyContent="center" flexDirection="column">
          <Button
            
            mb="10px"
            borderRadius="0px"
            bg="transparent"
            _hover={{ color: `black`, background: `white` }}
            color="white"
            border="1px"
            borderColor="#fff"
          >
            VER DETALLES
          </Button>
          <Button
           
            borderRadius="0px"
            bg="transparent"
            _hover={{ color: `black`, background: `white` }}
            color="white"
            border="1px"
            borderColor="#fff"
          >
            VER VIDEO
          </Button>
        </Flex>
      </Flex>
    </Flex>
  </Flex>
  )  
};
