import {
  Box,
  SimpleGrid,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Button,
} from '@chakra-ui/react';
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from 'react-icons/io5';
import { useNode, useEditor } from "@craftjs/core";
import React, { useEffect, useState } from "react";
import { TextEditor } from "../../Editor/text";
import { ImageEditor } from "../../Editor/image";
import { hoverStyle } from "../Style/styleDefault";
import { EditComponent } from "../../Button/editComponent";
import { useHover } from '../../Hooks/useHoverVersion2.ts';

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export const FeatureComponent = () => {
  const { hoverProps, isHovered } = useHover({});
  const { connectors: { connect, drag },actions: {}} = useNode();
 
  let contentDefault = {
    tag:"Our Story",
    title:"Hello",
    imgUrl:""
  }
  
  const [content, setContent] = useState(contentDefault);
  const [imageUrl, setImageUrl] = useState('https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
  const {selectedNodeId, actions} = useEditor((state) => ({
    selectedNodeId: state.events.selected
  }));
  return (
    <>
      <Box {...hoverProps} _hover={hoverStyle} w="100%" py={0} ref={ref => connect(drag(ref))}>

      <EditComponent handleDelete={() =>{
        actions.delete(selectedNodeId)
      } } isHovered={isHovered}/>
  
        <SimpleGrid pl={10} columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>

            <TextEditor  textTransform={'uppercase'}
              color={'blue.400'}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('blue.50', 'blue.900')}
              alignSelf={'flex-start'}
              rounded={'md'}
              setContent = {(content)=>setContent({...contentDefault,tag:content})}
              >
              {content.tag}
            </TextEditor>

            <Heading  as="div" >
              <TextEditor
              setContent = {(content)=>setContent({...contentDefault,title:content})}
              >
              {content.title}
              </TextEditor>
            </Heading>

            <Text color={'gray.500'} fontSize={'lg'}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>
              <Feature
                icon={
                  <Icon as={IoAnalyticsSharp} color={'yellow.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                text={'Business Planning'}
              />
              <Feature
                icon={<Icon as={IoLogoBitcoin} color={'green.500'} w={5} h={5} />}
                iconBg={useColorModeValue('green.100', 'green.900')}
                text={'Financial Planning'}
              />
              <Feature
                icon={
                  <Icon as={IoSearchSharp} color={'purple.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('purple.100', 'purple.900')}
                text={'Market Analysis'}
              />
            </Stack>
          </Stack>
          <Flex>
            <ImageEditor
              rounded={'md'}
              alt={'feature image'}
              src={imageUrl}
              setImageUrl = {(url)=>setImageUrl(url)} 
            />
          </Flex>
        </SimpleGrid>

      </Box>
    </>
  );
}