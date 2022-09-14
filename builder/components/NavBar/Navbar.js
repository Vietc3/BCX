import React from "react";

import {
  Box,
  Flex,
  useColorMode,
  useColorModeValue,
  Button,
  Text,
  Spacer,
  Icon,
} from "@chakra-ui/react";

import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaMoon, FaSun } from "react-icons/fa";
import { useRecoilState } from 'recoil';
import { PageState } from '../../store/Page/pageState';
import { CreatePageModal } from '../Modal/createPage';

export const Navbar = () => {
  const { toggleColorMode: toggleMode } = useColorMode();
  const bg = useColorModeValue("white", "gray.800");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const text = useColorModeValue("dark", "light");
  const [page, setPage] = useRecoilState(PageState);

  const handleCreatPage = (pageCreate) => {
    setPage(pageCreate)
  }


  return (
    <React.Fragment>
      <Flex>
        <Button
          onClick={toggleMode}
          borderRadius="10"
          size="md"
          fontSize="md"
          aria-label={`Switch to ${text} mode`}
          variant="ghost"
          bg={bg}
          ml={{ base: "0", md: "3" }}
          leftIcon={<SwitchIcon />}>
          Change Mode
      </Button>
        <Spacer />
        <Box pr={8} w="30%">
          <Flex>
            <Text pt="3" fontSize="sm" color="teal">Preview in a new Tab <Icon as={BsBoxArrowUpRight} w={5} h={5} pb="1" /></Text>
            <Spacer />
          
      <CreatePageModal handleCreatPage={(page)=>handleCreatPage(page)} />
      </Flex>
        </Box>
      </Flex>
    </React.Fragment>
  );
}
