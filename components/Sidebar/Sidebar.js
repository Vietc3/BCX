import React from "react";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button, Input,
  Box,
  useDisclosure
} from "@chakra-ui/react"

export const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <Box
        left={0}
        p={5}
        w="100%"
        top={0}
        h="100%"
      >
      </Box>
  )
    </>
  )
}