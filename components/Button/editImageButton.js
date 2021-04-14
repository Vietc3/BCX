import {
    HStack,
    Button
} from "@chakra-ui/react";
import { useState } from 'react';
import { TextEditModal } from "../Modal/textEdit"
import { useRecoilState  } from 'recoil';
import { ModalState } from '../../store/Modal/modalState';

export const EditImageButton = (props) => {
    const { isHovered} = props;
    return (
        <HStack display={isHovered ? "flex" : "none"}>
             <Button as="label" colorScheme="red" size="xs" width="15%" mb={0}>
             <input type="file" style={{visibility: "hidden",}}/>
                Change Image
             </Button>
            
          
            <Button colorScheme="red" size="xs">
                Delete
             </Button>
        </HStack>
    )
}