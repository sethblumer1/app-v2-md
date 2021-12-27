import React from 'react';
import { Flex, Stack, Text } from '@chakra-ui/react';
function Locations() {
  const locationsNumbers = [
    { location: 'Uptown', number: '212-876-8181' },
    { location: 'Hempstead', number: '516-538-8181' },
    { location: 'Rego Park', number: '718-575-8181' },
  ];

  return (
    <Stack direction={'row'} spacing={10} mr={8}>
      {locationsNumbers.map(info => (
        <Flex flexDirection="column" alignItems="center">
          <Text color="black" fontWeight="bold" fontSize="sm">
            {info.location}
          </Text>
          <Text color="black" fontSize="sm">
            {info.number}
          </Text>
        </Flex>
      ))}
    </Stack>
  );
}

export default Locations;

// <Box>
//   <Flex flexDirection="column">
//     <Text color="blackAlpha.900">Hempstead</Text>
//     <Text color="blackAlpha.900">420-666-6969</Text>
//   </Flex>
//   <Flex flexDirection="column">
//     <Text color="blackAlpha.900">Hempstead</Text>
//     <Text color="blackAlpha.900">420-666-6969</Text>
//   </Flex>
//   <Flex flexDirection="column">
//     <Text color="blackAlpha.900">Hempstead</Text>
//     <Text color="blackAlpha.900">420-666-6969</Text>
//   </Flex>
// </Box>;
