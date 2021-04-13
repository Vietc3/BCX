import {
    HStack,
    Button
} from "@chakra-ui/react";
import { useState } from 'react';
import { TextEditModal } from "../Modal/textEdit"
import { useRecoilState  } from 'recoil';
import { ModalState } from '../../store/Modal/modalState';

export const EditButtonGroup = (props) => {
    const { isHovered } = props;
    return (
        <HStack display={isHovered ? "flex" : "none"}>
            <TextEditModal/>
      
            <Button colorScheme="red" size="xs">
                Delete
             </Button>
        </HStack>
    )
}