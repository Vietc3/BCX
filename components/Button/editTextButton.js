import {
    HStack,
    Button
} from "@chakra-ui/react";
import { TextEditModal } from "../Modal/textEdit"

export const EditTextButton = (props) => {
    const { isHovered, content, setContent } = props;
    return (
        <HStack display={isHovered ? "flex" : "none"}>
            <TextEditModal content ={content} setContent={setContent}/>
            <Button colorScheme="red" size="xs">
                Delete
             </Button>
        </HStack>
    )
}