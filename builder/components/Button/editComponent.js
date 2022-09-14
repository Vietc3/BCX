import {
    Box,
    Button
} from "@chakra-ui/react";
import {EditFutureComponent} from '../Modal/editFutureComponent'
import {EditLastestComponent} from '../Modal/editLastestArticles'

export const EditFuture1 = (props) => {
    return (
        <Box display={props.isHovered ? "flex" : "none"}>
            <Button colorScheme="red" size="xs" onClick={props.handleDelete}>
                Delete
             </Button>
             <EditFutureComponent content={props.content}  setContent={props.setContent}  setContentCustom={props.setContentCustom}/>
        </Box>
    )
}


export const EditLastestArticles = (props) => {
    return (
        <Box display={props.isHovered ? "flex" : "none"}>
            <Button colorScheme="red" size="xs" onClick={props.handleDelete}>
                Delete
             </Button>
             <EditLastestComponent content={props.content}  setContent={props.setContent}  setContentCustom={props.setContentCustom}/>
        </Box>
    )
}