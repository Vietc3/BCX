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
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNode, useEditor } from "@craftjs/core";
export const CreatePageModal = (props) => {
  const { actions, query, enabled } = useEditor();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [page, setPage] = useState();
  const handleOnChange = (e) => {
    const pageCreate = {
      name: e.target.value,
      component: [],
    };
    setPage(pageCreate);
  };
  const handleSubmit = async () => {
    props.handleCreatPage(page);
    const data = { homepage: JSON.stringify(query.serialize()) };
    console.log(data);
    const response = await fetch("http://localhost:1337/homepage", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log("response", response);
    onClose();
  };

  return (
    <>
      <Button
        borderRadius="10"
        colorScheme="teal"
        size="md"
        fontSize="md"
        variant="solid"
        ml={{ base: "0", md: "3" }}
        onClick={onOpen}
      >
        Create Page
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Page</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Input onChange={handleOnChange} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              OK
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancle
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
