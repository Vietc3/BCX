import React,{Fragment }  from "react";
import { categories } from "./dataCategories";
import {
    VStack,
    Text,
    Flex,
    Center,
} from "@chakra-ui/react";
import { useRecoilState  } from 'recoil';
import { drawerState } from '../../store/sidebar/drawerState';

const hoverStyle = {
    background: "#f4f5f7",
    cursor: 'pointer',
    borderRadius:"10"
}

export const SidebarContent = (props) => {
    const [drawer, setDrawer] = useRecoilState(drawerState);
    const handleMouseOver = (component) => {
        setDrawer({ ...drawer, content: component.name, components: component.components })
    }
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
                                <Flex _hover={hoverStyle} onMouseOver={()=>handleMouseOver(component)} h="35px" pl={5} fontSize="sm" key={component.name}>
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