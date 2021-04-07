import React from 'react'
import { Navbar } from './NavBar/Navbar';
import { Sidebar } from './Sidebar/Sidebar';
import { DrawerComponent } from './Sidebar/DrawerComponent';
import { Divider, Grid, GridItem } from "@chakra-ui/react"
function Layout({ children }) {
    return (
        <Grid
            h="100%"
            w="100%"
            templateColumns="repeat(7, 1fr)"
            templateRows="repeat(10, 1fr)"
            gap={4}
            bg="#f4f5f7"
        >
            <GridItem colSpan={1} rowSpan={10} >
                <Sidebar />
            </GridItem>
            <GridItem pt={3} colSpan={6} rowSpan={1}>
                <Navbar />
            </GridItem>
            <GridItem colSpan={6} rowSpan={9} pl="10%" pr="10%" pb="2%">
                {/* <DrawerComponent /> */}
                {children}
            </GridItem>
        </Grid>
    )
}

export default Layout
