
import React from 'react';
import { useHover } from '../Hooks/useHoverVersion2.ts';
import { EditImageButton } from '../Button/editImageButton';
import { Image, Box } from "@chakra-ui/react"
import { useRecoilValue } from 'recoil';
import { ModalState } from '../../store/Modal/modalState';

export const ImageEditor = (props) => {
    const { hoverProps, isHovered } = useHover({});

    const modal = useRecoilValue(ModalState);
    const hoverStyle = {
        background: "#f4f5f7",
        cursor: 'pointer',
        borderRadius: "10",
        border: "2px dashed blue"
    }

    const { rounded, alt, src } = props

    return (<Box  {...hoverProps}>
        <EditImageButton isHovered={isHovered} />
        <Image
            rounded={rounded}
            alt={alt}
            src={src}
            _hover={hoverStyle}>

        </Image>
        </Box>

    );
};

