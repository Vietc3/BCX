import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  InputLeftElement,
  InputGroup,
  Input,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

import { FaRegUser, FaShoppingBag } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { useNode } from "@craftjs/core";
import { useHover } from "../../Hooks/useHoverVersion2.ts";

export const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export const Navigation7 = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    connectors: { connect, drag },
  } = useNode();
  const { hoverProps, isHovered } = useHover({});
  const hoverStyle = {
    background: "#f4f5f7",
    cursor: "pointer",
    borderRadius: "10",
    border: "2px dashed blue",
  };
  return (
    <>
      <Box
        {...hoverProps}
        _hover={hoverStyle}
        ref={(ref) => connect(drag(ref))}
        bg={useColorModeValue("white", "gray.900")}
        px={"10%"}
        py={3}
        borderBottom={1}
        borderStyle={"solid"}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>Logo</Box>

          <>
            <Stack spacing={4}>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<AiOutlineSearch color="gray.300" />}
                />
                <Input
                  minW="50vw"
                  placeholder="Search for products or brands"
                  variant="filled"
                />
              </InputGroup>
            </Stack>
          </>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <FaShoppingBag fontSize={"35px"} />

              <Menu>
                <MenuButton
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <FaRegUser fontSize={"35px"} color="black" />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <MenuItem>Login</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
