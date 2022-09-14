import {
  Drawer,
  DrawerBody,
  Text,
  Box,
  DrawerOverlay,
  DrawerContent,
  Image,
  useDisclosure,
} from "@chakra-ui/react"

import React, { useEffect } from "react";
import { useHover } from '../Hooks/useHoverVersion2.ts';
import { useRecoilValue } from 'recoil';
import { drawerState } from '../../store/sidebar/drawerState';
import {useEditor } from "@craftjs/core";

export const DrawerComponent = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { connectors, query } = useEditor();
  const { hoverProps, isHovered } = useHover({});
  const drawer = useRecoilValue(drawerState);
  const { openDrawer } = props;

  useEffect(() => {
    isHovered ? null : onClose();
  }, [isHovered])

  useEffect(() => {
    openDrawer ? onOpen() : null;
  }, [openDrawer])

  const hoverStyle = {
    background: "#f4f5f7",
    cursor: 'pointer',
    borderRadius: "10",
    border: "2px solid blue"
  }
  const handleDragStart = (component) => {
    console.log(component);
    onClose()
  }

  const imageComponent = drawer.components?.map((component, i) => (
    <Box onDragStart={()=>handleDragStart(component.name)} _hover={hoverStyle} p={3} ref={ref => connectors.create(ref, component.jsx)} key={component.name}> <Image src={"/imagesComponents/" + component.imgSrc} /></Box>
  ))
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="left"
        bg="#f4f5f7"
        size="sm"
      >
        <DrawerOverlay>
          <DrawerContent {...hoverProps} key="drawer" bg="#ffffff" left="13.6% !important" >
            <Box p={5}>
              <Text fontSize="xl" fontWeight="bold">{drawer.content}</Text>
              <Text fontSize="sm">Select a component 👇 and drag it to the canvas 👉</Text></Box>
            <DrawerBody>
              {imageComponent}
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}