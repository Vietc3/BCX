import React, { useState } from "react";
import {
  chakra,
  Flex,
  HStack,
  Link,
  Button,
  useColorModeValue,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Image,
  Box,
  useDisclosure,
  Spacer,
  IconButton,
  SimpleGrid,
  Stack,
  VStack,
  CloseButton,
  useColorMode,
} from "@chakra-ui/react";
import { IoIosArrowDown } from "react-icons/io";
import { AiFillHome, AiOutlineInbox, AiOutlineMenu } from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { FaMoon, FaSun } from "react-icons/fa";
import { useNode } from "@craftjs/core";
import { useHover } from "../../Hooks/useHoverVersion2.ts";
export const Navigation8 = () => {
  const bg = useColorModeValue("white", "gray.800");
  const cl = useColorModeValue("gray.800", "white");
  const mobileNav = useDisclosure();
  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const ic = useColorModeValue("brand.600", "brand.50");
  const hbg = useColorModeValue("gray.50", "brand.400");
  const tcl = useColorModeValue("gray.900", "gray.50");
  const dcl = useColorModeValue("gray.500", "gray.50");
  const hbgh = useColorModeValue("gray.100", "brand.500");

  const Section = (props) => {
    return (
      <Link
        m={-3}
        p={3}
        display="flex"
        alignItems="start"
        rounded="lg"
        _hover={{
          bg: hbg,
        }}
      >
        <chakra.svg
          flexShrink={0}
          h={6}
          w={6}
          color={ic}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          {props.icon}
        </chakra.svg>
        <Box ml={4}>
          <chakra.p fontSize="sm" fontWeight="700" color={tcl}>
            {props.title}
          </chakra.p>
          <chakra.p mt={1} fontSize="sm" color={dcl}>
            {props.children}
          </chakra.p>
        </Box>
      </Link>
    );
  };

  const Features = (
    <React.Fragment>
      <SimpleGrid
        columns={{
          base: 1,
          md: 3,
          lg: 5,
        }}
        pos="relative"
        gap={{
          base: 6,
          sm: 8,
        }}
        px={5}
        py={6}
        p={{
          sm: 8,
        }}
      >
        <Section
          title="Analytics"
          icon={
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke-w="2"
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          }
        >
          Get a better understanding of where your traffic is coming from.
        </Section>

        <Section
          title="Engagement"
          icon={
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke-w="2"
              d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
            />
          }
        >
          Speak directly to your customers in a more meaningful way.
        </Section>

        <Section
          title="Security"
          icon={
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke-w="2"
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          }
        >
          Your customers&#039; data will be safe and secure.
        </Section>

        <Section
          title="Integrations"
          description={
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke-w="2"
              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            />
          }
        >
          Connect with third-party tools that you&#039;re already using.
        </Section>

        <Section
          title="Automations"
          icon={
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke-w="2"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          }
        >
          Build strategic funnels that will drive your customers to convert
        </Section>
      </SimpleGrid>
      <Box
        px={{
          base: 5,
          sm: 8,
        }}
        py={5}
        bg={hbg}
        display={{
          sm: "flex",
        }}
      >
        <Stack
          direction={{
            base: "row",
          }}
          spacing={{
            base: 6,
            sm: 10,
          }}
        >
          <Box display="flow-root">
            <Link
              m={-3}
              p={3}
              display="flex"
              alignItems="center"
              rounded="md"
              fontSize="md"
              color={tcl}
              _hover={{
                bg: hbgh,
              }}
            >
              <chakra.svg
                flexShrink={0}
                h={6}
                w={6}
                color="gray.400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke-w="2"
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke-w="2"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </chakra.svg>
              <chakra.span ml={3}>Watch Demo</chakra.span>
            </Link>
          </Box>

          <Box display="flow-root">
            <Link
              m={-3}
              p={3}
              display="flex"
              alignItems="center"
              rounded="md"
              fontSize="md"
              color={tcl}
              _hover={{
                bg: hbgh,
              }}
            >
              <chakra.svg
                flexShrink={0}
                h={6}
                w={6}
                color="gray.400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke-w="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </chakra.svg>
              <chakra.span ml={3}>Contact Sales</chakra.span>
            </Link>
          </Box>
        </Stack>
      </Box>
    </React.Fragment>
  );
  const MobileNavContent = (
    <VStack
      pos="absolute"
      top={0}
      left={0}
      right={0}
      display={mobileNav.isOpen ? "flex" : "none"}
      flexDirection="column"
      p={2}
      pb={4}
      m={2}
      bg={bg}
      spacing={3}
      rounded="sm"
      shadow="sm"
    >
      <CloseButton
        aria-label="Close menu"
        justifySelf="self-start"
        onClick={mobileNav.onClose}
      />
      <Button w="full" variant="ghost" leftIcon={<AiFillHome />}>
        Dashboard
      </Button>
      <Button
        w="full"
        variant="solid"
        colorScheme="brand"
        leftIcon={<AiOutlineInbox />}
      >
        Inbox
      </Button>
      <Button w="full" variant="ghost" leftIcon={<BsFillCameraVideoFill />}>
        Videos
      </Button>
    </VStack>
  );

  const ShopAllCategories = () => {
    // const [hoverRef, isHovered] = useHover();
    const [categoryHover, setCategoryHover] = useState(listCategory[0]);
    const hoverStyle = {
      background: "#FFFF",
      cursor: "pointer",
      color: "black",
    };
    return (
      <Box
        w="100%"
        display={"flex"}
        flexDir="row"
        justifyContent={"space-between"}
        pos="relative"
        height="100px"
        px={"10%"}
        mt="5px"
        minHeight="50vh"
      >
        <Box
          role="group"
          flex={2}
          backgroundImage={"linear-gradient(#d31e4b,#6b2369)"}
          height="100%"
        >
          {listCategory?.map((category) => (
            <Box
              onMouseEnter={() => setCategoryHover(category)}
              color="white"
              py="10px"
              _hover={hoverStyle}
              style={
                categoryHover?.title === category?.title ? hoverStyle : null
              }
              px="10px"
              fontWeight={"bold"}
              fontSize={"sm"}
            >
              {category?.title}
            </Box>
          ))}
        </Box>
        <Box
          role="group"
          flex={4}
          display={"flex"}
          flexWrap="wrap"
          flexDir={"column"}
          pb="10%"
        >
          {categoryHover?.children?.map((category) => (
            <Box>
              <Box
                px="10px"
                fontWeight={"bold"}
                color="gray.600"
                fontSize={"sm"}
                mt={category?.children?.length > 0 ? "10px" : "0px"}
              >
                {category?.title}
              </Box>
              {category?.children?.length > 0
                ? category?.children?.map((chil) => (
                    <Box px="10px" color="gray.600" fontSize={"sm"}>
                      {chil?.title}
                    </Box>
                  ))
                : null}
            </Box>
          ))}
        </Box>
        <Box role="group" bgColor="#dddddda3" flex={2}>
          <Box px="10px" fontWeight={"bold"} color="gray.600" fontSize={"sm"}>
            Featured Brands
          </Box>
          {FeatureBrands?.map((item) => (
            <Box
              color="gray.600"
              px="10px"
              fontSize={"sm"}
              textTransform="uppercase"
            >
              {item}
            </Box>
          ))}
        </Box>
      </Box>
    );
  };

  const ChangiExperience = () => {
    const [categoryHover, setCategoryHover] = useState(listCategory[0]);
    const hoverStyle = {
      background: "#FFFF",
      cursor: "pointer",
      color: "black",
    };
    return (
      <Box
        w="100%"
        display={"flex"}
        flexDir="row"
        justifyContent={"space-between"}
        pos="relative"
        height="100px"
        px={"10%"}
        mt="5px"
        minHeight="50vh"
      >
        <SimpleGrid
          columns={3}
          spacing={"10px"}
          role="group"
          flex={6}
          height="100%"
          borderRight="1px"
          borderColor="gray.300"
          py="10px"
        >
          {[1, 2, 3, 4, 5, 6]?.map((category) => (
            <Image
              borderRadius="full"
              boxSize="200px"
              src="https://www.marketing91.com/wp-content/uploads/2019/06/promotion-techniques.jpg"
              alt="Dan Abramov"
            />
          ))}
        </SimpleGrid>

        <SimpleGrid
          columns={2}
          spacing={"10px"}
          role="group"
          flex={4}
          height="100%"
          borderRight="1px"
          borderColor="gray.300"
          alignItems={"center"}
          px="10px"
        >
          {[1, 2, 3]?.map((category) => (
            <Image
              borderRadius="50px"
              boxSize="200px"
              alignItems={"center"}
              src="https://www.marketing91.com/wp-content/uploads/2019/06/promotion-techniques.jpg"
              alt="Dan Abramov"
            />
          ))}
        </SimpleGrid>
      </Box>
    );
  };

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
    <Box {...hoverProps} _hover={hoverStyle} ref={(ref) => connect(drag(ref))}>
      <chakra.header
        h="full"
        bg={bg}
        w="full"
        px={{
          base: 2,
          sm: 4,
        }}
        py={"2px"}
        borderBottom="1px"
      >
        <Box
          w="100%"
          display={"flex"}
          flexDir="row"
          justifyContent={"space-between"}
          px={"10%"}
        >
          <Box role="group" flex={2} borderRight="1px">
            <Button
              bg={bg}
              color="gray.500"
              alignItems="center"
              fontSize="md"
              _hover={{
                color: cl,
              }}
              _focus={{
                boxShadow: "none",
              }}
              textTransform="uppercase"
              rightIcon={<IoIosArrowDown />}
            >
              Shop All Categories
            </Button>

            <Box
              pos="absolute"
              _groupHover={{
                display: "block",
              }}
              left={0}
              w="100%"
              display="none"
              px={4}
            >
              {/* <Box
                pos={"fixed"}
                display="none"
                w="100%"
                h="100vh"
                top="0px"
                left="0px"
                bottom="0px"
                right="0px"
                bgColor="rgba(0,0,0,0.5)"
                zIndex={2}
                 _groupHover={{
                display: "block",
              }}
              /> */}
              <ShopAllCategories />
            </Box>
          </Box>
          <Box
            role="group"
            display={"flex"}
            flexDir="row"
            flex={4}
            borderRight="1px"
          >
            <Button
              bg={bg}
              flex={1}
              color="gray.500"
              display="inline-flex"
              alignItems="center"
              fontSize="md"
              textTransform="uppercase"
              _hover={{
                color: cl,
              }}
              _focus={{
                boxShadow: "none",
              }}
            >
              Brands
            </Button>
            <Button
              bg={bg}
              flex={1}
              textTransform="uppercase"
              color="gray.500"
              alignItems="center"
              fontSize="md"
              _hover={{
                color: cl,
              }}
              _focus={{
                boxShadow: "none",
              }}
            >
              Promotions
            </Button>
            <Box role="group" flex={2} borderRight="1px">
              <Button
                bg={bg}
                textTransform="uppercase"
                color="gray.500"
                display="inline-flex"
                alignItems="center"
                fontSize="md"
                _hover={{
                  color: cl,
                }}
                _focus={{
                  boxShadow: "none",
                }}
              >
                Changi Experience
              </Button>
              <Box
                pos="absolute"
                _groupHover={{
                  display: "block",
                }}
                left={0}
                w="100%"
                display="none"
                px={4}
              >
                {/* <Box
                pos={"fixed"}
                display="none"
                w="100%"
                h="100vh"
                top="0px"
                left="0px"
                bottom="0px"
                right="0px"
                bgColor="rgba(0,0,0,0.5)"
                zIndex={2}
                 _groupHover={{
                display: "block",
              }}
              /> */}
                <ChangiExperience />
              </Box>
            </Box>
            <Button
              bg={bg}
              flex={1}
              textTransform="uppercase"
              color="gray.500"
              display="inline-flex"
              alignItems="center"
              fontSize="md"
              _hover={{
                color: cl,
              }}
              _focus={{
                boxShadow: "none",
              }}
            >
              Ishopcurates
            </Button>
          </Box>
          <Box role="group" flex={2}>
            <Button
              bg={bg}
              textTransform="uppercase"
              color="gray.500"
              alignItems="center"
              fontSize="md"
              _hover={{
                color: cl,
              }}
              _focus={{
                boxShadow: "none",
              }}
              rightIcon={<IoIosArrowDown />}
            >
              Shop For Non Traveller
            </Button>
            <Box
              pos="absolute"
              left={0}
              w="100%"
              display="none"
              _groupHover={{
                display: "block",
              }}
            >
              {Features}
            </Box>
          </Box>
        </Box>

        {MobileNavContent}
      </chakra.header>
    </Box>
  );
};

const listCategory = [
  {
    title: "Beauty",
    children: [
      {
        title: "See All",
        children: [],
      },
      {
        title: "New Arrivals",
        children: [],
      },
      {
        title: "Gift & Value Set",
        children: [],
      },
      {
        title: "Sale",
        children: [],
      },
      {
        title: "Make up",
        children: [
          {
            title: "Sale",
          },
          {
            title: "Face",
          },
          {
            title: "Lips",
          },
          {
            title: "Face",
          },
          {
            title: "Lips",
          },
          {
            title: "Face",
          },
        ],
      },
      {
        title: "Make up",
        children: [
          {
            title: "Sale",
          },
          {
            title: "Face",
          },
          {
            title: "Lips",
          },
        ],
      },
      {
        title: "Make up",
        children: [
          {
            title: "Sale",
          },
          {
            title: "Face",
          },
          {
            title: "Lips",
          },
        ],
      },
      {
        title: "Make up",
        children: [
          {
            title: "Sale",
          },
          {
            title: "Face",
          },
          {
            title: "Lips",
          },
        ],
      },
      {
        title: "Make up",
        children: [
          {
            title: "Sale",
          },
          {
            title: "Face",
          },
          {
            title: "Lips",
          },
        ],
      },
      {
        title: "Make up",
        children: [
          {
            title: "Sale",
          },
          {
            title: "Face",
          },
          {
            title: "Lips",
          },
        ],
      },

      {
        title: "Make up",
        children: [
          {
            title: "Sale",
          },
          {
            title: "Face",
          },
          {
            title: "Lips",
          },
        ],
      },
    ],
  },
  {
    title: "Electronics",
    children: [
      {
        title: "See All",
        children: [],
      },
      {
        title: "New Arrivals Electronics",
        children: [],
      },
      {
        title: "Gift & Value Set",
        children: [],
      },
      {
        title: "Sale",
        children: [],
      },
      {
        title: "Make up",
        children: [
          {
            title: "Sale",
          },
          {
            title: "Face",
          },
          {
            title: "Lips",
          },
        ],
      },
    ],
  },
  {
    title: "Wines & Spirits",
    children: [
      {
        title: "See All",
        children: [],
      },
      {
        title: "New Arrivals",
        children: [],
      },
      {
        title: "Gift & Value Set",
        children: [],
      },
      {
        title: "Sale",
        children: [],
      },
      {
        title: "Make up",
        children: [
          {
            title: "Sale",
          },
          {
            title: "Face",
          },
          {
            title: "Lips",
          },
        ],
      },
    ],
  },
  {
    title: "Food & Beverages",
    children: [
      {
        title: "See All",
        children: [],
      },
      {
        title: "New Arrivals",
        children: [],
      },
      {
        title: "Gift & Value Set",
        children: [],
      },
      {
        title: "Sale",
        children: [],
      },
      {
        title: "Make up",
        children: [
          {
            title: "Sale",
          },
          {
            title: "Face",
          },
          {
            title: "Lips",
          },
        ],
      },
    ],
  },
  {
    title: "Health & Wellness",
    children: [
      {
        title: "See All",
        children: [],
      },
      {
        title: "New Arrivals",
        children: [],
      },
      {
        title: "Gift & Value Set",
        children: [],
      },
      {
        title: "Sale",
        children: [],
      },
      {
        title: "Make up",
        children: [
          {
            title: "Sale",
          },
          {
            title: "Face",
          },
          {
            title: "Lips",
          },
        ],
      },
    ],
  },
];

const FeatureBrands = [
  "Channel",
  "Dior",
  "HM",
  "Laza",
  "Channel",
  "Dior",
  "HM",
  "Laza",
  "Channel",
  "Dior",
  "HM",
  "Laza",
];
