import React from "react";
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import useColorTheme from '../../Hooks/useColorTheme';
import ArticlesCard from '../../Cards/ArticlesCard';
import { useNode } from "@craftjs/core";
import { hoverStyle } from "../Style/styleDefault";
import useSWR from "swr";
import { fetcher } from "../../../utils/fetcher";

const LastestCard = () => {
    const {data,error} = useSWR('http://localhost:1337/articles?_sort=views:DESC&_limit=3',fetcher)
    const colors = useColorTheme();
    console.log(data);
    const { connectors: { connect, drag }} = useNode();
    if(!data){return (<div>Loading</div>)}

    return (
        <>
         <Box _hover={hoverStyle} p={4} ref={ref => connect(drag(ref))}>
            <Heading marginX=".1em" marginTop="1em" fontSize={'1.6em'} color={colors.primary}  fontWeight="300">
                Top Lastest
            </Heading>
            <Box d="flex" flexDirection={{ base: 'column', lg: 'row' }}>
                <Box d="flex" flexDirection="column" flex="4" as="section" marginY={'.7em'}>
                    {data.map((article) => {
                            return <ArticlesCard data-aos="fade-right" post={article} key={article} />;
                        })}
                    <Button w="100%" variant="ghost">
                        Load More
                    </Button>
                </Box>
                <Box flex="2" flexDirection="column" as="section" marginBottom={'10px'} color={colors.primary} marginX="1rem">
                    <Box>
                        <Text color="primary" textAlign="center"   fontWeight="bold">
                            Most Reading Today
                        </Text>
                        {data.map((article) => {
                            return (
                                <ArticlesCard
                                    data-aos="fade-left"
                                    column
                                    post={article}
                                    key={article.id+'MOST READING'}
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

