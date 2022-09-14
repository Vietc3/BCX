
import React from 'react';
import { useHover } from '../Hooks/useHoverVersion2.ts';
import { EditImageButton } from '../Button/editImageButton';
import { Image, Box } from "@chakra-ui/react";
import { hoverStyle } from "./Style/styleDefault";

export const ImageEditor = (props) => {
    const { hoverProps, isHovered } = useHover({});
    const { rounded, alt, src, setImageUrl } = props
    return (<Box  {...hoverProps}>
        <EditImageButton isHovered={isHovered} setImageUrl={setImageUrl} />
        <Image
            rounded={rounded}
            alt={alt}
            src={src}
            _hover={hoverStyle}>
        </Image>
        </Box>

    );
};

