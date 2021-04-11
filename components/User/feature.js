import {
  Box,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Button
} from '@chakra-ui/react';
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from 'react-icons/io5';
import { useNode } from "@craftjs/core";
import { EditButtonGroup } from "../Button/editButtonGroup";
import { useHover } from '../Hooks/useHoverVersion2.ts';

// import { Text } from './text';
import ContentEditable from 'react-contenteditable'
import React, { useEffect, useState } from "react";

const hoverStyle = {
  background: "#f4f5f7",
  cursor: 'pointer',
  borderRadius: "10",
  border: "2px solid blue"
}

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

export const FeatureComponent = ({ headerContent, title, tagName }) => {

  const { hoverProps, isHovered } = useHover({});
  const { connectors: { connect, drag }, selected, dragged, actions: { setProp } } = useNode((state) => ({
    selected: state.events.selected,
    dragged: state.events.dragged
  }));
  const [editable, setEditable] = useState(false);
  useEffect(() => { !selected && setEditable(false) }, [selected]);
  return (
    <>
      <Box {...hoverProps} _hover={hoverStyle} w="100%" py={7} ref={ref => connect(drag(ref))}>
        {/* <EditButtonGroup isHovered={isHovered} /> */}
        <SimpleGrid pl={10} columns={{ base: 1, md: 2 }} spacing={10}>

          <Stack spacing={4}>
            <Text
              textTransform={'uppercase'}
              color={'blue.400'}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('blue.50', 'blue.900')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}>

              <ContentEditable
                onClick={e => setEditable(true)}
                html={tagName ? tagName : 'Our Story'}
                disabled={!editable}
                onChange={e =>
                  setProp(props =>
                    props.tagName = e.target.value.replace(/<\/?[^>]+(>|$)/g, "")
                  )
                }
                tagName="p"
              />
            </Text>


            <Heading>
              <ContentEditable
                onClick={e => setEditable(true)}
                html={headerContent ? headerContent : ' A digital Product design agency'}
                disabled={!editable}
                onChange={e =>
                  setProp(props =>
                    props.headerContent = e.target.value.replace(/<\/?[^>]+(>|$)/g, "")
                  )
                }
                tagName="p"
              />

            </Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
              <ContentEditable
                onClick={e => setEditable(true)}
                html={title ? title : 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore'}
                disabled={!editable}
                onChange={e =>
                  setProp(props =>
                    props.title = e.target.value.replace(/<\/?[^>]+(>|$)/g, "")
                  )
                }
                tagName="p"
              />
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
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={
                'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
              }
            />
          </Flex>
        </SimpleGrid>

      </Box>
    </>
  );
}