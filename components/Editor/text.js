
import React, { useState, useEffect } from 'react';
import { useHover } from '../Hooks/useHoverVersion2.ts';
import { EditButtonGroup } from '../Button/editButtonGroup';
import {
  Text
} from "@chakra-ui/react"


export const TextEditor = (props) => {
  const { hoverProps, isHovered } = useHover({});
  const hoverStyle = {
    background: "#f4f5f7",
    cursor: 'pointer',
    borderRadius: "10",
    border: "2px solid blue"
  }
  const { textTransform, color, fontWeight, fontSize, bg, p, alignSelf, rounded } = props

  return (
    <Text
      textTransform={textTransform}
      color={color}
      fontWeight={fontWeight}
      fontSize={fontSize}
      bg={bg}
      p={p}
      alignSelf={alignSelf}
      rounded={rounded}
      _hover={hoverStyle} {...hoverProps}>
      <EditButtonGroup isHovered={isHovered} />
      {props.children}
    </Text>
  );
};

