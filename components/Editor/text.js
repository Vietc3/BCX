
import React, { useState, useEffect } from 'react';
import { useHover } from '../Hooks/useHoverVersion2.ts';
import { EditButtonGroup } from '../Button/editButtonGroup';
import {  Text } from "@chakra-ui/react"
import { useRecoilValue } from 'recoil';
import { ModalState } from '../../store/Modal/modalState';

export const TextEditor = (props) => {
  const { hoverProps, isHovered } = useHover({});

  const modal = useRecoilValue(ModalState);
  const hoverStyle = {
    background: "#f4f5f7",
    cursor: 'pointer',
    borderRadius: "10",
    border: "2px dashed blue"
  }

  const { textTransform, color, fontWeight, fontSize, bg, p, alignSelf, rounded, setContent, setTitle } = props

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
      <EditButtonGroup content={props.children} isHovered={isHovered} setContent={setContent} setTitle={setTitle}/>
      {props.children}
    </Text>
  );
};

