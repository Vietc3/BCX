import React from "react";
import { categories } from "./dataCategories";

import {
    Box,
    VStack,
    Text,
    Flex,
    Spacer,
    Tag,
    Stack,
    useColorModeValue,
    Center,
    color
} from "@chakra-ui/react";

const hoverStyle = {
    background: "#f4f5f7",
    cursor: 'pointer',
    borderRadius:"10"
}

export const SidebarContent = (props) => {

  

    return (<>
        <VStack
            align="stretch"
            pt={2}
            pl={5}     
        >
            {
                categories.map((category, i) => (
                    <>
                        <Text key={category.name} pt={2} align="left" fontSize="xs" fontWeight="bold" color="gray.500">{category.name}
                        </Text>
                        {
                            category.components.map((component, i) => (
                                <Flex key={i} _hover={hoverStyle} h="35px" pl={5} fontSize="sm" >
                                    <Center >
                                        <Text >
                                            {component.name}
                                        </Text>
                                    </Center>
                                </Flex>

                            ))
                        }
                    </>
                ))
            }


        </VStack>
    </>
    );
};