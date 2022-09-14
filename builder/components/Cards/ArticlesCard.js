import React, { useState } from "react";
import {
  Box,
  BoxProps,
  Text,
  useBreakpointValue,
  Icon,
  chakra,
  Flex,
} from "@chakra-ui/react";
import { useColorTheme } from "../Hooks/useColor";
import styles from "../../constants/styles";
import Image from "../Image/Image";
import { URL_BASE } from "../../constants/index";
import Card from "./Card";
import _ from "lodash";
import { useRouter } from "next/router";
import { BsFillPersonFill } from "react-icons/bs";
import { BiShow } from "react-icons/bi";
import { BsCalendar } from "react-icons/bs";

const ArticleCard = ({
  post,
  column = false,
  imgBoxSize,
  skeleton = false,
  titleFontSize = "1.4rem",
  ...props
}) => {
  const colors = useColorTheme();
  const flexDirection = useBreakpointValue({
    base: "column",
    md: column ? "column" : "row",
  });
  const router = useRouter();

  const onClick = () => {
    router.push(`/articles/${post.id}`);
  };

  const [hover, setHover] = useState(false);

  const getUrlImage = (image) => {
    return URL_BASE + image;
  };

  return (
    <Card
      p={4}
      justifyContent="flex-start"
      cursor="pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ transform: `scale(${hover ? 1.01 : 1})` }}
      transition="ease-in 0.2s"
      overflow="hidden"
      marginY=".5rem"
      display="flex"
      {...props}
      flexDirection={flexDirection}
    >
      <Box>
        {/* <Image
          width={{ base: "100%", lg: column ? "100%" : 60 }}
          height={{ base: 80, lg: column ? "15rem" : 40 }}
          src={getUrlImage(post?.image_cover[0]?.url)}
          alt={"Photo of " + post.title}
          objectFit="cover"
          borderRadius={styles.borderRadius}
        /> */}
      </Box>
      <Box mt={{ base: 4, md: 2 }} ml={{ md: 6 }}>
        <Text
          fontWeight="bold"
          textTransform="uppercase"
          fontSize="sm"
          letterSpacing="wide"
          color={colors.primary}
        >
          {post.title}
        </Text>
        <Text
          mt={1}
          display="block"
          fontSize="lg"
          lineHeight="normal"
          fontWeight="semibold"
          href="#"
          color={colors.secondary}
        >
          {_.upperFirst(post.title)}
        </Text>
        <Text mt={2} color="gray.500">
          {post?.description?.substr(0, 120)}
          {post?.description?.length > 120 ? "..." : ""}
        </Text>
        <Flex alignItems="center" mt={2}>
          <Icon as={BsCalendar} h={6} w={6} mr={2} />

          <chakra.h1 px={2} fontSize="sm">
            {post.public_date}
          </chakra.h1>
        </Flex>
        <Flex alignItems="center" mt={2}>
          <Icon as={BsFillPersonFill} h={6} w={6} mr={2} />
          <chakra.h1 px={2} fontSize="sm">
            {post.author}
          </chakra.h1>
        </Flex>

        <Flex alignItems="center" mt={2}>
          <Icon as={BiShow} h={6} w={6} mr={2} />
          <chakra.h1 px={2} fontSize="sm">
            {post.views}
          </chakra.h1>
        </Flex>
      </Box>
    </Card>
  );
};

export default ArticleCard;
