import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Text,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';
import Banner from './Banner';
import Locations from './NavComps/Locations';
import MainNav from './NavComps/MainNav';

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg="whiteAlpha.900" px={4}>
        <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack alignItems={'center'}>
            <Box
              backgroundImage={
                'url(https://i.ibb.co/1n9SxFS/weight-md-new-Logo-no-Bg.png)'
              }
              backgroundSize={'cover'}
              backgroundPosition={'center center'}
              // h={12}
              // w={12}
              h="75px"
              w="75px"
            ></Box>
            <Text fontSize={'xl'} fontWeight={'bold'} color={'#003E5B'}>
              Medical Weight Control
            </Text>
          </HStack>
          <Flex alignItems={'center'}>
            {/* Right side of navbar */}
            <Locations />
          </Flex>
        </Flex>

        {/* CHECK THIS: https://chakra-templates.dev/navigation/navbar */}
        {/* {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map(link => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null} */}
      </Box>
      <MainNav />

      <Box>
        <Banner />
      </Box>
    </>
  );
}
