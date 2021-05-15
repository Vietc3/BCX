import {
  Box,
  SimpleGrid,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue, Image,
  Avatar,
} from '@chakra-ui/react';
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from 'react-icons/io5';
import { FaUser } from "react-icons/fa";
import { useNode, useEditor } from "@craftjs/core";
import React, { useState, useEffect } from "react";
import { TextEditor } from "../../Editor/text";
import { ImageEditor } from "../../Editor/image";
import { hoverStyle } from "../Style/styleDefault";
import { EditFuture1 } from "../../Button/editComponent";
import { useHover } from '../../Hooks/useHoverVersion2.ts';
import { updatePage } from '../../../utils/updatePage';

const Feature = ({ text, icon, avatarSize = 'md', iconBg,author }) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Avatar name={author.name} size={avatarSize} src={author.avatar} />
      <Text fontWeight={600}>{author.name}</Text>
    </Stack>
  );
};

export const FeatureComponent = () => {
  const { hoverProps, isHovered } = useHover({});
  const { connectors: { connect, drag }, actions: { } } = useNode();
  let contentDefault = {
    topic: "Our Story",
    title: "Hello",
    description:'ABC',
    author:'Default',
    imgUrl: "https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  }
  const [content, setContent] = useState(contentDefault);
  const { selectedNodeId, query, actions } = useEditor((state) => ({
    selectedNodeId: state.events.selected
  }));

  useEffect(async() => {
    const data={components:JSON.parse(query.serialize())}
    const response  =await fetch('http://localhost:1337/pages/609a2721a0fa655dac819468',{
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(data)})
  }, [content])

  const setCustomContent = (contentEdited) =>{
    actions.setCustom(selectedNodeId, (custom) => (custom.content = contentEdited))
  }

  return (
    <>
      <Box {...hoverProps} _hover={hoverStyle} w="100%" py={0} ref={ref => connect(drag(ref))}>
        <EditFuture1 handleDelete={() => {
          actions.delete(selectedNodeId)
        }} isHovered={isHovered} content={content} setContent={(contentEdited) => setContent({ ...contentEdited })} 
        setContentCustom={(contentEdited) => setCustomContent(contentEdited)}
        />

        <SimpleGrid pl={10} columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text textTransform={'uppercase'}
              color={'blue.400'}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('blue.50', 'blue.900')}
              alignSelf={'flex-start'}
              rounded={'md'}

            >
              {content.topic}
            </Text>

            <Heading as="div" >
              <Text>
                {content.title}
              </Text>
            </Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
              {content.description}
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>
             
              <Feature
                 author={{
                  id: '1',
                  name: content.author,
                  avatar:
                      'https://images.unsplash.com/photo-1554384645-13eab165c24b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1275&q=80',
              }}
                icon={
                  <Icon as={FaUser} color={'yellow.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                text={content.author}
              />
            </Stack>
          </Stack>
          <Flex>
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={content.imgUrl}
            >
            </Image>


            {/* <ImageEditor
              rounded={'md'}
              alt={'feature image'}
              src={imageUrl}
              setImageUrl = {(url)=>setImageUrl(url)} 
            /> */}
          </Flex>
        </SimpleGrid>

      </Box>
    </>
  );
}