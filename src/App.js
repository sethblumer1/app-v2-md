import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Flex,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Banner from './HomeComps/Banner';
import Navbar from './HomeComps/Navbar';
import MainNav from './HomeComps/NavComps/MainNav';
import BlockFooter from './HomeComps/FooterComps/BlockFooter';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex flexDirection={'column'} minH={'100vh'}>
        <Navbar />
        <BlockFooter />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
