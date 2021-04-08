import React,{Fragment }  from "react";
import { categories } from "./dataCategories";

import {
    VStack,
    Text,
    Flex,
    Center,
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
            key="contentSidebar"
        >
            {
                categories.map((category, index) => (
                <Fragment key={category.name} >
                       <Text pt={2} align="left" fontSize="xs" fontWeight="bold" color="gray.500">{category.name}
                        </Text>
                        {
                            category.components.map((component, i) => (
                                <Flex _hover={hoverStyle} h="35px" pl={5} fontSize="sm" key={component.name}>
                                    <Center >
                                        <Text >
                                            {component.name}
                                        </Text>
                                    </Center>
                                </Flex>
                            ))
                        }
                </Fragment>
                ))
            }


        </VStack>
    </>
    );
};