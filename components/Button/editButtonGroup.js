import {
    HStack,
    Button
} from "@chakra-ui/react";
import { useState } from 'react';
import { TextEditModal } from "../Modal/textEdit"
import { useRecoilState  } from 'recoil';
import { ModalState } from '../../store/Modal/modalState';

export const EditButtonGroup = (props) => {
    const { isHovered, content, setContent, setTitle } = props;
    return (
        <HStack display={isHovered ? "flex" : "none"}>
            <TextEditModal content = {content} setTitle={setTitle} setContent={setContent}/>
            <Button colorScheme="red" size="xs">
                Delete
             </Button>
        </HStack>
    )
}