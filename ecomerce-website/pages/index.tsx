import React, { useEffect, useState } from "react";
import { Spacer, Flex } from "@chakra-ui/react";



import { useGetContent } from "../src/services/index"
import { Navigation } from "@components/builderComponents/navigation/navigation";
import { Navigation2 } from "@components/builderComponents/navigation/navigation2";
import { Navigation6 } from "@components/builderComponents/navigation/navigation6";
import { NavAccount } from "@components/builderComponents/navigation/accountNavigation";


import { Header } from "@components/builderComponents/headers/header1";
import { Header2 } from "@components/builderComponents/headers/header2";
import { Header3 } from "@components/builderComponents/headers/header3";
import useSWR from 'swr';

import { Header4 } from "@components/builderComponents/headers/header4";
import { AdvertisementText } from "@components/builderComponents/advertisementText";
export const fetcher = (...args: any) => fetch(...args).then(res => res.json())

const Home: React.FC = () => {
    const [content, setContent] = useState({})

    const { data, error } = useSWR('http://localhost:1337/homepage', fetcher)
    const getContent = async () => {
        // let data = await useGetContent()
        setContent(JSON.parse(JSON.parse(data?.homepage)))
    }
    useEffect(() => {
        if (data) {
            getContent()
        }

    }, [data])

    const handleElements = (nameELements: any) => {
        console.log("nameELements", nameELements)
        if (nameELements?.displayName === "Navigation") {
            return <Navigation />
        } else if (nameELements?.displayName === "Navigation2") {
            return <Navigation2 />
        } else if (nameELements?.displayName === "Navigation6") {
            return <Navigation6 />
        } else if (nameELements?.displayName === "Header") {
            return <Header />
        } else if (nameELements?.displayName === "Header2") {
            return <Header2 />
        } else if (nameELements?.displayName === "Header3") {
            return <Header3 />
        } else if (nameELements?.displayName === "Header4") {
            return <Header4 />
        } else {
            return
        }

    }
    console.log("content", content)
    return (
        <Flex direction="column" minH="100vh">
            {/* {
                content[content?.ROOT?.linkedNodes?.drop]?.nodes?.map(chil => handleElements(content[`${chil}`]))

            } */}
            <AdvertisementText/>
            <NavAccount/>
            <Navigation6/>
        </Flex>
    );
};

export default Home;

