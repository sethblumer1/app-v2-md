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
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import FooterMain from './FooterComps/FooterMain';
import BlockFooter from './FooterComps/BlockFooter';
import Consultation from './ContactComps/Consultation';

export default function Banner() {
  return (
    <>
      <Flex
        w={'full'}
        h={'60vh'}
        backgroundImage={'url(https://i.ibb.co/Dw13KCt/scale-more-faded.png)'}
        backgroundSize={'cover'}
        backgroundPosition={'center center'}
      >
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
        >
          <Stack maxW={'2xl'} align={'center'} spacing={6}>
            <Text
              color={'#003E5B'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '4xl', md: '4xl' })}
            >
              Make the change today.
            </Text>
            <Stack direction={'row'}>
              {/* <Button
                bg={'green.400'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'green.500' }}
              >
                Request consultation
              </Button> */}
              <Consultation />
            </Stack>
          </Stack>
        </VStack>
      </Flex>

      <BlockFooter />

      {/* <Flex bgColor={'#003E5B'} h={'26vh'} alignItems={'center'}>
        <FooterMain />
      </Flex> */}
    </>
  );
}
