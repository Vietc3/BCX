import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,Button,Input
  } from "@chakra-ui/react"
  import React, { useRef } from "react";

 export const DrawerComponent = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef();
  
    return (
      <>
        <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
          Open
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Create your account</DrawerHeader>
  
              <DrawerBody>
                <Input placeholder="Type here..." />
              </DrawerBody>
  
              <DrawerFooter>
                <Button variant="outline" mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme="blue">Save</Button>
              </DrawerFooter>
            </DrawerContent>
        
        </Drawer>
      </>
    )
  }