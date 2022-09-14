import { Box, Icon, useColorModeValue, Flex, Spacer, HStack, Select } from "@chakra-ui/react";
import { PageState } from '../store/Page/pageState';
import { MdDesktopMac, MdTabletAndroid, MdPhoneIphone } from "react-icons/md";
import { ContainerComponent } from "../components/User/Container/container";
import { useRecoilValue } from 'recoil';
import { Element } from "@craftjs/core";


const Home = () => {
  const bg = useColorModeValue("white", "gray.800");
  const bgHeader = useColorModeValue("#f8f9fa", "gray.700");
  const pageContent = useRecoilValue(PageState);
  return (
    <>
      <Box bg={bg} w='100%' h="100%" borderWidth="1px" borderRadius="2%" ml={{ base: "0", md: "3" }}>
        <Flex bg={bgHeader}>
          <Box w='10%' p="6" >
            <HStack spacing="15px">
              <Box w="7px" h="7px" borderRadius="50%" bg="red">
              </Box>
              <Box w="7px" h="7px" borderRadius="50%" bg="yellow.400">
              </Box>
              <Box w="7px" h="7px" borderRadius="50%" bg="green">
              </Box>
            </HStack>
          </Box>
          <Spacer />
          <Box w="35%" h="10" pt="2" pl="5">
            <Select bg={bg} size="sm" borderRadius="lg" style={{ textAlignLast: "center" }}>
              <option value="index.html" >{pageContent.name || 'index.html'}</option>
            </Select>
          </Box>
          <Spacer />
          <Box w='13%' p="4">
            <HStack spacing="15px" >
              <Icon as={MdDesktopMac} w={5} h={5} />
              <Icon as={MdTabletAndroid} w={5} h={5} />
              <Icon as={MdPhoneIphone} w={5} h={5} />
            </HStack>
          </Box>
        </Flex>
        <Element id="drop" is={ContainerComponent} canvas>
        </Element>
      </Box>
    </>
  )
}

export default Home