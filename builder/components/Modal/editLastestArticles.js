
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
    RadioGroup, Radio,
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

export const EditLastestComponent = (props) => {
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
                    <EditContent  content={content} setContent={setContent} setContentCustom={setContentCustom} />
                </ModalContent>
            </Modal>
        </>
    )
}


const EditContent = (props) => {
    const { content, setContent, setContentCustom } = props;
   
    // const [contentEditor, setContentEditor] = useState(content);
    // const { data, error } = useSWR('http://localhost:1337/' + contentType, fetcher);

    const [featuredLeft, setFeaturedLeft] = useState(content.featuredLeft);
    const [featuredRight, setFeaturedRight] = useState(content.featuredRight);

    
    const formik = useFormik({
        initialValues: {
            featuredLeft: 'hottest',
            featuredRight: 'lastest',
        },
        onSubmit: async values => {
            values= {
                featuredLeft: featuredLeft,
                featuredRight: featuredRight,
            }

            await setContentCustom(values)
            setContent(values)   
        },
    });

    // useEffect(() => {
    //   let result = data ? data.filter((entity) => entity.id === contentEntity) : null
    //   setDataEntity(result)
    // }, [contentEntity])

console.log();
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
                                            SET CONTENT FOR EACH SECTION
                                         </FormLabel>
                                    </FormControl>
                                    <FormControl as={GridItem} colSpan={[6, 3]}>
                                    <chakra.fieldset>
                                        <Box
                                            as="legend"
                                            fontSize="md"
                                            color={useColorModeValue("gray.900", "gray.50")}
                                        >
                                            LEFT SECTION
                                          <Text
                                                fontSize="sm"
                                                color={useColorModeValue("gray.500", "gray.400")}
                                            >
                                                Please select the list you want to display
                                         </Text>
                                        </Box>
                                        <RadioGroup
                                            name="featuredLeft"
                                            fontSize="sm"
                                            color={useColorModeValue("gray.700", "gray.50")}
                                            colorScheme="brand"
                                            mt={4}
                                            onChange={setFeaturedLeft} 
                                            value={featuredLeft}
                                        
                                        >
                                            <Stack spacing={4}>
                                                <Radio spacing={3}  value="hottest">
                                                    Top 5 hottest articles
                                                 </Radio>
                                                <Radio spacing={3}   value="lastest">
                                                    Top 5 lasttest articles
                                              </Radio>
                                            </Stack>
                                        </RadioGroup>
                                    </chakra.fieldset>
                                    </FormControl>
                                    <FormControl as={GridItem} colSpan={[6, 3]}>
                                    <chakra.fieldset>
                                        <Box
                                            as="legend"
                                            fontSize="md"
                                            color={useColorModeValue("gray.900", "gray.50")}
                                        >
                                            RIGHT SECTION
                                           <Text
                                                fontSize="sm"
                                                color={useColorModeValue("gray.500", "gray.400")}
                                            >
                                                Please select the list you want to display
                                          </Text>
                                        </Box>
                                        <RadioGroup
                                            name="featuredRight"
                                            fontSize="sm"
                                            color={useColorModeValue("gray.700", "gray.50")}
                                            colorScheme="brand"
                                            mt={4}
                                            onChange={setFeaturedRight} 
                                            value={featuredRight}
                                        >
                                            <Stack spacing={4}>
                                                <Radio spacing={3} value="hottest">
                                                    Top 5 hottest articles
                                                 </Radio>
                                                <Radio spacing={3}  value="lastest">
                                                    Top 5 lasttest articles
                                                </Radio>
                                            </Stack>
                                        </RadioGroup>
                                    </chakra.fieldset>
                                    </FormControl>
                                  


                                </SimpleGrid>

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

