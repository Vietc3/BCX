
import {
  Modal, ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Button,
  ModalCloseButton,
  useDisclosure,
  chakra,
  Box,
  Flex,
  useColorModeValue,
  SimpleGrid,
  GridItem,
  Heading,
  Text,
  Stack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Select,
  FormHelperText,
  Textarea,
  Avatar,
  Icon,
  VisuallyHidden, Image
} from "@chakra-ui/react"

import { useFormik } from 'formik';
import React, { useEffect, useState } from "react";
import useSWR from 'swr';
import { fetcher } from '../../utils/fetcher';

export const EditFutureComponent = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { content, setContent, setContentCustom } = props
  return (
    <>
      <Button size="xs" colorScheme="red" onClick={onOpen}>Edit Component</Button>
      <Modal isOpen={isOpen} size="4xl" onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Content</ModalHeader>
          <ModalCloseButton />
          <EditContent content={content} setContent={setContent} setContentCustom={setContentCustom} />
        </ModalContent>
      </Modal>
    </>
  )
}


const Selector = ({ nameSelector,value, idSelector, articles, placeholder,setContent }) => {
  return (
    <FormControl as={GridItem} colSpan={[6, 3]}>
      <FormLabel
        fontSize="sm"
        fontWeight="md"
        color={useColorModeValue("gray.700", "gray.50")}
      >
        {nameSelector}
      </FormLabel>
      <Select
        id={idSelector}
        name={nameSelector}
        autoComplete={nameSelector}
        placeholder={placeholder}
        mt={1}
        focusBorderColor="brand.400"
        shadow="sm"
        size="sm"
        w="full"
        rounded="md"
        value={value[idSelector]}
        onChange={(e)=>setContent(e.target.value)}
      >
        <option value={articles.topic}>{articles.topic}</option>
        <option value={articles.title}>{articles.title}</option>
        <option value={articles.description}>{articles.description}</option>
        <option value={articles.author}>{articles.author}</option>
        <option value={articles.image_cover[0].url}>{articles.image_cover[0].url}</option>
      </Select>
    </FormControl>
  )
}


const EditContent = (props) => {

  const { content, setContent, setContentCustom } = props;
  const [contentType, setContentType] = useState('articles');
  const [contentEntity, setContentEntity] = useState('60921566f06d3b2b94d6b30b');
  const [dataEntity, setDataEntity] = useState();

  const [contentEditor, setContentEditor] = useState(content);
  const { data, error } = useSWR('http://localhost:1337/' + contentType, fetcher);

  const formik = useFormik({
    initialValues: {
      topic: contentEditor.topic,
      title: contentEditor.title,
      description: contentEditor.description,
      author: contentEditor.author,
      imgUrl: contentEditor.imgUrl
    },
    onSubmit: async values => {
      values = contentEditor;
      await setContentCustom(values)
      setContent(values)
    },
  });

  useEffect(() => {
    let result = data ? data.filter((entity) => entity.id === contentEntity) : null
    setDataEntity(result)
  }, [contentEntity])


  return (
    <Box bg={useColorModeValue("gray.50", "inherit")} p={10}>
      <Box>
        <SimpleGrid
          display={{ base: "initial", md: "grid" }}
          columns={{ md: 3 }}
          spacing={{ md: 6 }}
        >
          <GridItem colSpan={{ md: 1 }}>
            <Box px={[4, 0]}>
              <Heading fontSize="lg" fontWeight="md" lineHeight="6">
                Content
                </Heading>
              <Text
                mt={1}
                fontSize="sm"
                color={useColorModeValue("gray.600", "gray.400")}
              >
                This is where content is edited
                </Text>
            </Box>
          </GridItem>
          <GridItem mt={[5, null, 0]} colSpan={{ md: 2 }}>
            <chakra.form
              shadow="base"
              rounded={[null, "md"]}
              overflow={{ sm: "hidden" }}
              onSubmit={formik.handleSubmit}
            >
              <Stack
                px={4}
                py={5}
                bg={useColorModeValue("white", "gray.700")}
                spacing={6}
                p={{ sm: 6 }}
              >
                <SimpleGrid columns={3} spacing={6}>
                  <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel
                      for="content-type"
                      fontSize="sm"
                      fontWeight="bold"
                      color={useColorModeValue("gray.700", "gray.50")}
                    >
                      CHOOSE CONTENT SOURCE
                    </FormLabel>
                  </FormControl>
                  <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel
                      for="content-type"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue("gray.700", "gray.50")}
                    >
                      Content Type
                    </FormLabel>
                    <Select
                      id="content-type"
                      name="content-type"
                      autoComplete="content-type"
                      placeholder="Select Content Type"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      value={contentType}
                      onChange={(e) => setContentType(e.target.value)}
                    >
                      <option value="articles">Articles</option>
                      <option value="products">Products</option>
                    </Select>
                  </FormControl>


                  <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel
                      for="Entity"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue("gray.700", "gray.50")}
                    >
                      Entity
                    </FormLabel>
                    <Select
                      id="entity"
                      name="entity"
                      autoComplete="entity"
                      placeholder="Select entity"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      value={contentEntity}
                      onChange={(e) => setContentEntity(e.target.value)}

                    >{
                        data ? data.map((entity) =>
                        (
                          <option value={entity._id} key={entity._id}>{entity.title}</option>
                        )
                        )
                          : <option>Articles 1</option>
                      }

                    </Select>
                  </FormControl>
                  <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel
                      for="content-type"
                      fontSize="sm"
                      fontWeight="bold"
                      color={useColorModeValue("gray.700", "gray.50")}
                    >
                      SET CONTENT COMPONENT
                    </FormLabel>
                  </FormControl>
               
                  <Selector  value={contentEditor} setContent={(e)=>setContentEditor({...contentEditor,topic:e})}  nameSelector="Topic" idSelector="topic" placeholder="Select Content For Topic" articles={dataEntity ? dataEntity[0] : { author: 'xxx', title: 'xxx', description: 'xxx', topic: 'xxx', image_cover: [{ url: 'xxx' }] }} />
                  <Selector  value={contentEditor} setContent={(e)=>setContentEditor({...contentEditor,title:e})} nameSelector="Title" idSelector="title" placeholder="Select Content For Title" articles={dataEntity ? dataEntity[0] : { author: 'xxx', title: 'xxx', description: 'xxx', topic: 'xxx', image_cover: [{ url: 'xxx' }] }} />
                  <Selector  value={contentEditor} setContent={(e)=>setContentEditor({...contentEditor,description:e})} nameSelector="Description" idSelector="description" placeholder="Select Content For Description" articles={dataEntity ? dataEntity[0] : { author: 'xxx', title: 'xxx', description: 'xxx', topic: 'xxx', image_cover: [{ url: 'xxx' }] }} />
                  <Selector  value={contentEditor} setContent={(e)=>setContentEditor({...contentEditor,author:e})} nameSelector="Author" idSelector="author" placeholder="Select Content For Author" articles={dataEntity ? dataEntity[0] : { author: 'xxx', title: 'xxx', description: 'xxx', topic: 'xxx', image_cover: [{ url: 'xxx' }] }} />
                  <Selector value={contentEditor}  setContent={(e)=>setContentEditor({...contentEditor,imgUrl:'http://localhost:1337'+e})}  nameSelector="Image" idSelector="image_cover[0].url" placeholder="Select Content For Image URL" articles={dataEntity ? dataEntity[0] : { author: 'xxx', title: 'xxx', description: 'xxx', topic: 'xxx', image_cover: [{ url: 'xxx' }] }} />

                </SimpleGrid>
                <div >
                  <Image src={contentEditor.imgUrl} alt="Segun Adebayo" />
                </div>


              </Stack>
              <Box
                px={{ base: 4, sm: 6 }}
                py={3}
                bg={useColorModeValue("gray.50", "gray.900")}
                textAlign="right"
              >
                <Button
                  type="submit"
                  colorScheme="brand"
                  _focus={{ shadow: "" }}
                  fontWeight="md"
                >
                  Save
                  </Button>
              </Box>
            </chakra.form>
          </GridItem>
        </SimpleGrid>
      </Box>
    </Box>)
}

