import React, { useState, useEffect } from "react";
import {
  Button,
  Grid, GridItem,
  useColorModeValue,
  Box,
  Image
} from "@chakra-ui/react";
import { BsFillHeartFill, BsBrush } from "react-icons/bs";
import { SidebarContent } from "./SidebarContent";
import useHover from '../Hooks/useHover';

export const Sidebar = (props) => {

  const bg = useColorModeValue("white", "gray.800");
  const [hoverRef, isHovered] = useHover();
  const sendData = () => {
    props.handleDrawer(isHovered);
  }
  useEffect(() => {sendData()}, [isHovered]);

  return (
    <>
      <Grid
        h="100%"
        w="100%"
        templateRows="repeat(12, 1fr)"
        gap={0}
       
      >
        <GridItem rowSpan={1} bg={bg}
          px={{ base: 2, sm: 4 }}
          py={1}
          shadow="md" >
          <Box w="100%" h="8%" p={2}>
            <Image src="/logo/BCX-Studio.png" alt="BCX" />
          </Box>
        </GridItem>
        <GridItem rowSpan={9} bg={bg}
          px={{ base: 2, sm: 4 }}
          py={1}
          ref={hoverRef}
          shadow="md" overflowY={isHovered ? "scroll" : "hidden"}
        >
          <SidebarContent isHovered={isHovered}/>
        </GridItem>
        <GridItem rowSpan={2} bg={bg}>
          <Box px={3} pt={5}>
            <Button leftIcon={<BsBrush />} colorScheme="teal" variant="outline" w="100%">Change Style</Button>
          </Box>
          <Box px={3} pt={3}>
            <Button leftIcon={<BsFillHeartFill />} colorScheme="red" w="100%">Get Full Access</Button>
          </Box>
        </GridItem>
      </Grid>
  )
    </>
  )
}