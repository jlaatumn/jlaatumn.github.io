import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@/components/ui/button"
import {
  Container,
  Box,
  HStack
} from "@chakra-ui/react";



export default function Home() {
  return (
    <Container bg="#939f93" maxW="100%" p={0} h="100vh">
      
      <Container p={5} color="black">
        <Box 
        borderRadius="lg" 
        bg="#edebea"
        p={3} 
        mb={6} 
        align="center">
            Hello, welcome to the JLA website. This is a box
        </Box>
      </Container>

      <Container p={5} mb={6} align="center">
        <HStack justify="center" align="center">
          <Button>button1</Button>
          <Button>button2</Button>
        </HStack>
      </Container>
      
    
    </Container>
  );
}