import React from 'react';
import { useHover } from '../Hooks/useHoverVersion2.ts';
import { EditTextButton } from '../Button/editTextButton';
import {  Text } from "@chakra-ui/react"
import { hoverStyle } from "./Style/styleDefault";


export const TextEditor = (props) => {

  const { hoverProps, isHovered } = useHover({});
  const { textTransform, color, fontWeight, fontSize, bg, p, alignSelf, rounded, setContent } = props;

  return (
    <Text
      as="div"
      textTransform={textTransform}
      color={color}
      fontWeight={fontWeight}
      fontSize={fontSize}
      bg={bg}
      p={p}
      alignSelf={alignSelf}
      rounded={rounded}
      _hover={hoverStyle} {...hoverProps}>
      <EditTextButton content={props.children} isHovered={isHovered} setContent={setContent}/>
      {props.children}
    </Text>
  );
};

