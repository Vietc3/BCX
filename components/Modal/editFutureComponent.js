
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
  InputLeftAddon,
  FormHelperText,
  Textarea,
  Avatar,
  Icon,
  VisuallyHidden, Image
} from "@chakra-ui/react"

import { useFormik } from 'formik';
import React, { useState } from "react";

export const EditFutureComponent = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {content, setContent} =props
  return (
    <>
      <Button size="xs" colorScheme="red" onClick={onOpen}>Edit Component</Button>
      <Modal isOpen={isOpen} size="4xl" onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Content</ModalHeader>
          <ModalCloseButton />
          <EditContent content={content} setContent={setContent}/>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Cancle
              </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}


const EditContent = (props) => {

  const {content,setContent} = props;
  const [imageUrl, setImageUrl] = useState(content.imgUrl);
  const formik = useFormik({
    initialValues: {
      tag: content.tag,
      title: content.title,
      imgUrl:imageUrl
    },
    onSubmit: values => {
      values.imgUrl=imageUrl;
      setContent(values)
    },
  });
  const uploadImage = (e) =>{
    setImageUrl(URL.createObjectURL(e.target.files[0]))
}

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
                  <FormControl id="tag" as={GridItem} colSpan={[3, 2]}>
                    <FormLabel
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue("gray.700", "gray.50")}
                    >
                      Tag
                      </FormLabel>
                    <InputGroup size="sm">
                      <Input
                        type="tel"
                        placeholder={content.tag}
                        focusBorderColor="brand.400"
                        rounded="md"
                        onChange={formik.handleChange}
                        value={formik.values.tag}
                      />
                    </InputGroup>
                  </FormControl>
                </SimpleGrid>

                <div>
                  <FormControl id="title" mt={1}>
                    <FormLabel
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue("gray.700", "gray.50")}
                    >
                      Title
                      </FormLabel>
                      <InputGroup size="sm">
                      <Input
                        type="tel"
                        placeholder={content.title}
                        focusBorderColor="brand.400"
                        rounded="md"
                        onChange={formik.handleChange}
                        value={formik.values.title}
                      />
                    </InputGroup>     
                  </FormControl>
                </div>
               
                <div >
                  <Image src={imageUrl} alt="Segun Adebayo" />
                </div>
                <FormControl>
                  <FormLabel
                    fontSize="sm"
                    fontWeight="md"
                    color={useColorModeValue("gray.700", "gray.50")}
                  >
                    Cover photo
                    </FormLabel>
                  <Flex
                    mt={1}
                    justify="center"
                    px={6}
                    pt={5}
                    pb={6}
                    borderWidth={2}
                    borderColor={useColorModeValue("gray.300", "gray.500")}
                    borderStyle="dashed"
                    rounded="md"
                  >
                    <Stack spacing={1} textAlign="center">
                      <Icon
                        mx="auto"
                        boxSize={12}
                        color={useColorModeValue("gray.400", "gray.500")}
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth="2"
                          strokLinecap="round"
                          strokeLinejoin="round"
                        />
                      </Icon>
                      <Flex
                        fontSize="sm"
                        color={useColorModeValue("gray.600", "gray.400")}
                        alignItems="baseline"
                      >
                        <chakra.label
                          for="file-upload"
                          cursor="pointer"
                          rounded="md"
                          fontSize="md"
                          color={useColorModeValue("brand.600", "brand.200")}
                          pos="relative"
                          _hover={{
                            color: useColorModeValue("brand.400", "brand.300"),
                          }}
                        >
                          <span>Upload a file</span>
                          {/* <VisuallyHidden> */}
                            <input
                            id="imgUrl"
                              name="file-upload"
                              type="file"
                              onChange={uploadImage}
                            />
                          {/* </VisuallyHidden> */}
                        </chakra.label>
                        <Text pl={1}>or drag and drop</Text>
                      </Flex>
                      <Text
                        fontSize="xs"
                        color={useColorModeValue("gray.500", "gray.50")}
                      >
                        PNG, JPG, GIF up to 10MB
                        </Text>
                    </Stack>
                  </Flex>
                </FormControl>
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

