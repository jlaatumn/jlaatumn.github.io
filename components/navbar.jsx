'use client';

//import logo from '../public/jla_logo.jpg'
import Link from 'next/link';
import { Box, Button, Flex, Spacer, Image, Text } from '@chakra-ui/react';

const Navbar = () => (
  <Box as="nav" bg="#f2f3f3" p={4}>
    <Flex align="center" maxW="1200px" mx="auto">
      {/* Logo and text on the left */}
      <Flex align="center">
        <Image src="/jla_logo.png" alt="Logo" boxSize="40px" mr={2} />
        <Text fontSize="xl" fontWeight="bold" fontFamily="'Palatino', serif" color="black">
            Japanese Language Association
        </Text>
      </Flex>


      

      {/* Navigation Links */}
      <Flex flex="1" justify="space-evenly">
        <Link href="/">
            <Button variant="link" color="black" fontWeight="normal">Home</Button>
        </Link>
        <Link href="/about">
            <Button variant="link" color="black" fontWeight="normal">Board Members</Button>
        </Link>
        <Link href="/contact">
            <Button variant="link" color="black" fontWeight="normal">Contact</Button>
        </Link>
        <Link href="/contact">
            <Button variant="link" color="black" fontWeight="normal">Join JLA</Button>
        </Link>
      </Flex>
    </Flex>
  </Box>
);

export default Navbar;