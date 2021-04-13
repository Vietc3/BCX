
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  ModalCloseButton, Lorem,
  useDisclosure,
  Input 
} from "@chakra-ui/react"
import React, { useEffect } from "react";

export const TextEditModal = (props) => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button colorScheme="red" onClick={onOpen} size="xs" >Change Text</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Test</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Input placeholder="Basic usage" />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}