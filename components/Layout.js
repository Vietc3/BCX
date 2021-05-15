import React, { useState } from 'react'
import { Navbar } from './NavBar/Navbar';
import { Sidebar } from './Sidebar/Sidebar';
import { DrawerComponent } from './Sidebar/DrawerComponent';
import { Grid, GridItem } from "@chakra-ui/react";
import { Editor, Frame } from "@craftjs/core";

import { Header } from "./User/Header/header";
import { Header2 } from "./User/Header/header2";
import { Header3 } from "./User/Header/header3";
import { Header4 } from "./User/Header/header4";
import { Header5 } from "./User/Header/header5";
import { Header6 } from "./User/Header/header6";

import { FeatureComponent } from "./User/Feature/feature";
import { FeatureComponent2 } from "./User/Feature/feature2";
import { FeatureComponent3 } from "./User/Feature/feature3";

import { Testimonial1 } from "./User/Testimonial/testimonial";
import { Testimonial2 } from "./User/Testimonial/testimonial2";
import { Testimonial3 } from "./User/Testimonial/testimonial3";

import { CallToAction } from "./User/CallToAction/callToAction";
import { CallToAction2 } from "./User/CallToAction/callToAction2";
import { CallToAction3 } from "./User/CallToAction/callToAction3";
import { CallToAction4 } from "./User/CallToAction/callToAction4";


import { SignInUp } from "./User/SignInUp/signInUp";
import { SignInUp2 } from "./User/SignInUp/signInUp2";
import { SignInUp3 } from "./User/SignInUp/signInUp3";

import { Pricing } from "./User/Pricing/pricing";
import { Pricing2 } from "./User/Pricing/pricing2";

import { Navigation } from "./User/Navigation/navigation";
import { Navigation2 } from "./User/Navigation/navigation2";

import { Footer } from "./User/Footer/footer";
import { Footer2 } from "./User/Footer/footer2";
import { Footer3 } from "./User/Footer/footer3";
import { Footer4 } from "./User/Footer/footer4";
import { Footer5 } from "./User/Footer/footer5";

import LastestCard from "./User/DynamicComponent/LastestArticles";
import { ContainerComponent } from "./User/Container/container";

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
                    resolver={{
                        FeatureComponent, FeatureComponent2, FeatureComponent3, ContainerComponent,
                        Testimonial1,Testimonial2,Testimonial3,
                        SignInUp, SignInUp2, SignInUp3,
                        Footer, Footer2, Footer3, Footer4, Footer5,
                        CallToAction,CallToAction2,CallToAction3,CallToAction4,
                        Navigation, Navigation2,
                        Pricing, Pricing2,
                        Header, Header2, Header3, Header4, Header5, Header6,
                        LastestCard
                    }}
                    enabled={enabled}
                    // onNodesChange={query => {
                    //     const json = query.serialize();
                    //     // save to server
                    //    console.log(json);

                    //   }}
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
