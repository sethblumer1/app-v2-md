import React from 'react';
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  List,
  ListItem,
  ListIcon,
  Box,
  Heading,
  Icon,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import { FaCheck } from 'react-icons/fa';

function BlockFooter() {
  return (
    <Flex
      p={3}
      //   flexDirection={'column'}
      height={'100%'}
      justifyContent={'center'}
      alignItems={'center'}
      bgColor={'#003E5B'}
    >
      <Box
        p={5}
        display="flex"
        alignItems={'center'}
        flexDirection={'column'}
        width={'25vw'}
      >
        <Heading fontSize="4xl" color="white">
          NY's Largest
        </Heading>
        <Heading fontSize="4xl" color="white">
          Weight Loss
        </Heading>
        <Heading fontSize="4xl" color="white">
          Practice
        </Heading>
      </Box>

      <Box
        p={5}
        display="flex"
        alignItems={'center'}
        flexDirection={'column'}
        color={'white'}
        // width={'30vw'}
        // bgColor={'#003E5B'}
      >
        <List spacing={5}>
          <ListItem fontSize={'lg'} display="flex" alignItems={'center'}>
            <Icon as={FaCheck} color="green.500" pr={1} />
            Over 18k patients treated
          </ListItem>

          <ListItem fontSize={'lg'} alignItems={'center'}>
            <Icon as={FaCheck} color="green.500" pr={1} />
            50 years of service to the community
          </ListItem>

          <ListItem fontSize={'lg'} alignItems={'center'}>
            <Icon as={FaCheck} color="green.500" pr={1} />4 convenient locations
            in NY area
          </ListItem>
        </List>
      </Box>
    </Flex>
  );
}

export default BlockFooter;
