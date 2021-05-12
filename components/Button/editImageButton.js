import {
    Box,
    Button
} from "@chakra-ui/react";

export const EditImageButton = (props) => {
    
    const { isHovered, setImageUrl} = props;
    const uploadImage = (e) =>{
        setImageUrl(URL.createObjectURL(e.target.files[0]))
    }
    return (
        <Box display={isHovered ? "flex" : "none"}>
             <Button as="label" colorScheme="red" size="xs" width="18%" mb={0}>
             <input type="file" style={{visibility: "hidden",}} onChange={uploadImage}/>
                Change Image
             </Button>          
            <Button colorScheme="red" size="xs">
                Delete
             </Button>
        </Box>
    )
}