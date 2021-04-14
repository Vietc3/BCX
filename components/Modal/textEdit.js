
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
import React, { useState } from "react";

import { useRecoilState } from 'recoil';
import { ModalState } from '../../store/Modal/modalState';

export const TextEditModal = (props) => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modal, setModal] = useRecoilState(ModalState);
  const [content, setContentA] = useState(props.content);

  const handleOnChange = (e) =>{
    setContentA(e.target.value)
  }

  const  handleSubmit = () => {
    props.setContent?   props.setContent(content) : null;
    props.setTitle ?  props.setTitle(content) : null;
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
            <Input value={content} onChange={handleOnChange} />
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