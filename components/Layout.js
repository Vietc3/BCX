import React from 'react'
import NavBar from './NavBar/Navbar';
import { Sidebar } from './Sidebar/Sidebar';
import { Divider, Grid, GridItem } from "@chakra-ui/react"
function Layout({ children }) {
    return (
        <Grid
            h="100%"
            w="100%"
            templateColumns="repeat(6, 1fr)"
            templateRows="repeat(10, 1fr)"
            gap={1}
        >
            <GridItem colSpan={1} rowSpan={10} bg="tomato" >
            <Sidebar />
            </GridItem>
            <GridItem colSpan={5} rowSpan={1}>
            <NavBar />
            </GridItem>
            <GridItem colSpan={5} rowSpan={9} bg="tomato" >
            {children}
            </GridItem>
        </Grid>
    )
}

export default Layout
