import React from 'react';
import {
  Link,
  HStack,
  Box,
  Stack,
  useColorModeValue,
  useDisclosure,
  Button,
  Image,
  Flex,
  Icon,
} from '@chakra-ui/react';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    fontSize={'md'}
    color={'whiteAlpha.900'}
    _hover={{
      textDecoration: 'none',
      color: '#4E95A9',
    }}
    href={'#'}
    letterSpacing={1}
  >
    {children}
  </Link>
);

function MainNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const Links = [
    'HOME',
    'MEET OUR DOCTORS',
    'TIPS & TRICKS',
    'BMI CALCULATOR',
    <Flex justifyContent={'center'}>
      <Icon as={FaFacebookSquare} mr={5} w={5} h={5} />
      <Icon as={FaInstagram} mr={5} w={5} h={5} />
      <Image
        // src="https://www.freeiconspng.com/uploads/spain-flag-icon-10.png"
        src="https://cdn.countryflags.com/thumbs/spain/flag-round-250.png"
        width={'20px'}
      />
    </Flex>,
  ];

  return (
    <HStack
      spacing={10}
      alignItems={'center'}
      justifyContent={'flex-end'}
      bgColor={'#003E5B'}
      bgGradient="linear(to-t, #003e5b,#4E95A9)"
      h={12}
      pr={10}
    >
      <HStack as={'nav'} spacing={6} display={{ base: 'none', md: 'flex' }}>
        {Links.map(link => (
          <NavLink key={link}>{link}</NavLink>
        ))}
      </HStack>
      {/* <Button
        borderRadius={'8px'}
        bgColor={'transparent'}
        pr={8}
        _hover={{ bgColor: 'transparent' }}
        _active={{ bgColor: 'transparent' }}
        _focus={{ outline: 0 }}
      ></Button> */}

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {Links.map(link => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </HStack>
  );
}

export default MainNav;
