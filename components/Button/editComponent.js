import {
    Box,
    Button
} from "@chakra-ui/react";
import {EditFutureComponent} from '../Modal/editFutureComponent'

export const EditComponent = (props) => {
    return (
        <Box display={props.isHovered ? "flex" : "none"}>
            <Button colorScheme="red" size="xs" onClick={props.handleDelete}>
                Delete
             </Button>
             <EditFutureComponent content={props.content}  setContent={props.setContent}/>
        </Box>
    )
}