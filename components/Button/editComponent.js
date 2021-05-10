import {
    Box,
    Button
} from "@chakra-ui/react";
import { hoverStyle } from "./Style/styleDefault";

export const EditComponent = (props) => {
    return (
        <Box display={props.isHovered ? "flex" : "none"}>
            <Button colorScheme="red" size="xs" onClick={props.handleDelete}>
                Delete
             </Button>
        </Box>
    )
}