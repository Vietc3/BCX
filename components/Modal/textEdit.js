import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  ModalCloseButton,
  useDisclosure,
  Input
} from "@chakra-ui/react"
import React, { useState } from "react";
export const TextEditModal = (props) => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [contentEdit, setContentEdit] = useState(props.content);
  const handleOnChange = (e) => {
    setContentEdit(e.target.value)
  }
  const handleSubmit = () => {
    props.setContent(contentEdit);
    onClose();
  }

  return (
    <>
      <Button colorScheme="red" onClick={onOpen} size="xs" >Change Text</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Change Test</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Input value={contentEdit} onChange={handleOnChange} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit} >OK</Button>
            <Button variant="ghost" onClick={onClose}>
              Cancle
            </Button>
          </ModalFooter>
          
        </ModalContent>
      </Modal>
    </>
  )
}