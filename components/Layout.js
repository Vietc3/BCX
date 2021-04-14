import React, { useState } from 'react'
import { Navbar } from './NavBar/Navbar';
import { Sidebar } from './Sidebar/Sidebar';
import { DrawerComponent } from './Sidebar/DrawerComponent';
import { Grid, GridItem } from "@chakra-ui/react";
import { Editor, Frame, Element } from "@craftjs/core";
import { FeatureComponent } from "./User/Feature/feature";
import { FeatureComponent2 } from "./User/Feature/feature2";
import { FeatureComponent3 } from "./User/Feature/feature3";
import { Navigation } from "./User/navigation/navigation";
import { Navigation2 } from "./User/navigation/navigation2";
import { Footer } from "./User/Footer/footer";
import { Footer2 } from "./User/Footer/footer2";
import { ContainerComponent } from "./User/container";



function Layout({ children }) {
    const [openDrawer, setOpenDrawer] = useState(false);
    const [enabled] = useState(true);
    const handleDrawer = (isOpen) => { setOpenDrawer(isOpen) }
    return (
        <Grid
            h="100%"
            w="100%"
            templateColumns="repeat(7, 1fr)"
            templateRows="repeat(10, 1fr)"
            gap={4}
            bg="#f4f5f7"
        >
            <GridItem colSpan={1} rowSpan={10} zIndex="99999" >
                <Sidebar handleDrawer={handleDrawer} />
            </GridItem>

            <GridItem pt={3} colSpan={6} rowSpan={1}>
                <Navbar />
            </GridItem>

            <GridItem colSpan={6} rowSpan={9} pl="10%" pr="10%" pb="2%">
                <Editor 
                resolver={{FeatureComponent,FeatureComponent2,FeatureComponent3,ContainerComponent
                    ,Footer, Footer2,Navigation,Navigation2}}
                    enabled={enabled}                 
                    >
                    <DrawerComponent openDrawer={openDrawer} />
                    <Frame>
                    {children}
                    </Frame>
                </Editor>
            </GridItem>
        </Grid>
    )
}

export default Layout
