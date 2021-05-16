import React, { useState, useEffect } from "react";
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import {useColorTheme} from '../../Hooks/useColor';
import ArticlesCard from '../../Cards/ArticlesCard';
import { useNode, useEditor } from "@craftjs/core";
import { hoverStyle } from "../Style/styleDefault";
import useSWR from "swr";
import { fetcher } from "../../../utils/fetcher";
import { EditLastestArticles } from "../../Button/editComponent";
import { useHover } from '../../Hooks/useHoverVersion2.ts';

const LastestCard = () => {
    const { data, error } = useSWR('http://localhost:1337/articles?_sort=views:DESC&_limit=3', fetcher);
    const dataTopLastest = useSWR('http://localhost:1337/articles?_sort=public_date:DESC&_limit=5', fetcher);

    const colors = useColorTheme();
    const { hoverProps, isHovered } = useHover({});
    const { connectors: { connect, drag } } = useNode();
    const { selectedNodeId, query, actions } = useEditor((state) => ({
        selectedNodeId: state.events.selected
    }));

    let contentDefault = {
        featuredLeft: "lastest",
        featuredRight: "hottest",
    }
    const [content, setContent] = useState(contentDefault);
    useEffect(async () => {
        console.log(content);
        const data = { components: JSON.parse(query.serialize()) }
        const response = await fetch('http://localhost:1337/pages/609a2721a0fa655dac819468', {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }, [content])



    const setCustomContent = (contentEdited) => {
        actions.setCustom(selectedNodeId, (custom) => (custom.content = contentEdited))
    }




    if (!data || !dataTopLastest.data) { return (<div>Loading...</div>) }
    return (
        <>
            <Box {...hoverProps} _hover={hoverStyle} p={4} ref={ref => connect(drag(ref))}>
                <EditLastestArticles handleDelete={() => {
                    actions.delete(selectedNodeId)
                }}
                    isHovered={isHovered}
                    setContentCustom={(contentEdited) => setCustomContent(contentEdited)}
                    content={content} setContent={(contentEdited) => setContent({ ...contentEdited })}
                />
                <Heading marginX=".1em" marginTop="1em" fontSize={'1.6em'} color={colors.primary} fontWeight="300">
                    {content.featuredLeft === "lastest" ? 'Top Lastest' : 'Most Reading Today'}
                </Heading>
                <Box d="flex" flexDirection={{ base: 'column', lg: 'row' }}>
                    <Box d="flex" flexDirection="column" flex="4" as="section" marginY={'.7em'}>
                        {
                            content.featuredLeft === "lastest" ? dataTopLastest.data.map((article) => {
                                return <ArticlesCard data-aos="fade-right" post={article} key={article.id + 'NEW'} />;
                            }) : data.map((article) => {
                                return <ArticlesCard data-aos="fade-right" post={article} key={article.id + 'NEW'} />;
                            })}
                        <Button w="100%" variant="ghost">
                            Load More
                    </Button>
                    </Box>
                    <Box flex="2" flexDirection="column" as="section" marginBottom={'10px'}  marginX="1rem">
                        <Box>
                            <Text color={colors.primary} textAlign="center" fontWeight="bold">
                                {content.featuredRight === "lastest" ? 'Top Lastest' : 'Most Reading Today'}
                            </Text>
                            {content.featuredRight === "lastest" ? dataTopLastest.data.map((article) => {
                                return (
                                    <ArticlesCard
                                        data-aos="fade-left"
                                        column
                                        post={article}
                                        key={article.id + 'MOST READING'}
                                        titleFontSize={'1em'}
                                    />
                                );
                            }) : data.map((article) => {
                                return (
                                    <ArticlesCard
                                        data-aos="fade-left"
                                        column
                                        post={article}
                                        key={article.id + 'MOST READING'}
                                        titleFontSize={'1em'}
                                    />
                                );
                            })}
                        </Box>
                    </Box>
                </Box>
            </Box>


        </>
    );
};

export default LastestCard;

