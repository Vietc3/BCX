import {
    HStack,
    Button
} from "@chakra-ui/react";

export const EditButtonGroup = (props) => {
const {isHovered}=props
    return (
        <HStack display = { isHovered ? "flex" : "none"}>
            <Button colorScheme="red" size="xs">
                Edit
             </Button>
            <Button colorScheme="red" size="xs">
                Delete
             </Button>
        </HStack>
    )
}