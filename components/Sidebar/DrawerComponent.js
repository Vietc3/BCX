import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure, Button, Input, useColorModeValue
} from "@chakra-ui/react"

import React, { useEffect } from "react";
import { useHover } from '../Hooks/useHoverVersion2';

export const DrawerComponent = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { mouseOver, mouseOut, hovered } = useHover();
  const { openDrawer } = props;

  useEffect(() => {
    hovered ? null : onClose();
  }, [hovered])

  useEffect(() => {
    openDrawer ? onOpen() : null;
  }, [openDrawer])

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="left"
        bg="#f4f5f7"
      >
        <DrawerOverlay>
          <DrawerContent onMouseOver={mouseOver} onMouseOut={mouseOut} key="drawer" bg="#ffffff" left="13.5% !important" >
            <DrawerHeader>Components</DrawerHeader>
            <DrawerBody>
              <Input placeholder="Components" />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}