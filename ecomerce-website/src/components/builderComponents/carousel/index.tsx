import React, { useState } from 'react';
import { Box, Flex, Text, HStack, Spacer, Center, Heading, Icon } from '@chakra-ui/react';
import PostCard from '../../cards/PostCard';
import useColorTheme from '../../../hooks/useColorTheme';

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import Slider from 'react-slick';
import useWindowSize from '../../../hooks/useWindowSize';


export const Caroulsel1 = () => {
    const slides = [
        { urlImage: "https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/301994727_636962257849545_744444354408617245_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=e3f864&_nc_ohc=fa1fHt2f_0gAX-wGOfU&_nc_ht=scontent.fsgn5-12.fna&oh=00_AT_gOHOka8y11zAOOSDrret2dKN185YOH2VCk3v17pKNkQ&oe=6327F7A3" },
        { urlImage: "https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/301994727_636962257849545_744444354408617245_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=e3f864&_nc_ohc=fa1fHt2f_0gAX-wGOfU&_nc_ht=scontent.fsgn5-12.fna&oh=00_AT_gOHOka8y11zAOOSDrret2dKN185YOH2VCk3v17pKNkQ&oe=6327F7A3" },
        { urlImage: "https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/301994727_636962257849545_744444354408617245_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=e3f864&_nc_ohc=fa1fHt2f_0gAX-wGOfU&_nc_ht=scontent.fsgn5-12.fna&oh=00_AT_gOHOka8y11zAOOSDrret2dKN185YOH2VCk3v17pKNkQ&oe=6327F7A3" }
    ];

    const screenSize = useWindowSize();

    function SampleNextArrow(props: any) {
        const { onClick } = props;
        return (
            <Icon
                position="absolute"
                cursor="pointer"
                _hover={{
                    opacity: 0.8,
                    color: colors.primary,
                }}
                top={'50%'}
                right={-15}
                color="white"
                zIndex={99}
                as={MdKeyboardArrowRight}
                onClick={onClick}
                boxSize="4rem"
                mt={1}
            />
        );
    }

    function SamplePrevArrow(props: any) {
        const { onClick } = props;
        return (
            <Icon
                position="absolute"
                cursor="pointer"
                _hover={{
                    opacity: 0.8,
                    color: colors.primary,
                }}
                top={'50%'}
                left={-15}
                color="white"
                zIndex={99}
                as={MdKeyboardArrowLeft}
                onClick={onClick}
                boxSize="4rem"
                mt={1}
            />
        );
    }
    const colors = useColorTheme();
    const settings =
        screenSize.width >= 750
            ? {
                dots: true,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                arrows: true,
                speed: 500,
                autoplaySpeed: 5000,
                cssEase: 'linear',
                nextArrow: <SampleNextArrow />,
                prevArrow: <SamplePrevArrow />,
            }
            : {
                dots: true,
                infinite: false,
                slidesToShow: 1,
                swipeToSlide: true,
                autoplay: false,
                speed: 500,
                arrows: false,
                autoplaySpeed: 5000,
                cssEase: 'linear',
                nextArrow: <SampleNextArrow />,
                prevArrow: <SamplePrevArrow />,
            };
    return (
        <>

            {/* <Flex w="full" p={0} alignItems="center" justifyContent="center"> */}

            <Box w="70%" pos="relative" overflow="hidden" alignSelf={"center"}>
                <Box w="full">
                    <Slider {...settings}>
                        {slides?.map((slide: any) => (
                            <Box
                                key={slide.id + slide.title}
                                h="50vh"
                                w="full"
                                cursor="pointer"
                                boxSize="full"
                                shadow="md"
                                flex="none"
                            >
                                <PostCard
                                    article={slide}
                                    idArticle={slide?.url}

                                />
                            </Box>
                        ))}
                    </Slider>

                </Box>
            </Box>

        </>
    );
};


