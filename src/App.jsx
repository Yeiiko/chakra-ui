import { ChakraProvider,Flex } from "@chakra-ui/react"
import { Header } from "./components/Header"

function App() {
  

  return (
    <ChakraProvider>
      <Flex 
      height="100vh"  alignItems="flex-start" justifyContent="center"
       
     >
        <Header/>
      </Flex>
      
    </ChakraProvider>
    
      
    
  )
}

export default App
