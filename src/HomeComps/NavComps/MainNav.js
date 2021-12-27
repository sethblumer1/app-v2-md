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
} from '@chakra-ui/react';

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
  const Links = ['HOME', 'MEET OUR DOCTORS', 'TIPS & TRICKS', 'BMI CALCULATOR'];

  return (
    <HStack
      spacing={10}
      alignItems={'center'}
      justifyContent={'flex-end'}
      bgColor={'#003E5B'}
      pr={3}
    >
      <HStack as={'nav'} spacing={6} display={{ base: 'none', md: 'flex' }}>
        {Links.map(link => (
          <NavLink key={link}>{link}</NavLink>
        ))}
      </HStack>
      <Button
        borderRadius={'8px'}
        padding={0}
        bgColor={'transparent'}
        pr={8}
        _hover={{ bgColor: 'transparent' }}
      >
        <Image
          src="https://www.freeiconspng.com/uploads/spain-flag-icon-10.png"
          width={'25px'}
        />
      </Button>

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
