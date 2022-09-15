import React, { useState } from "react";
import {
  chakra,
  HStack,
  Box,
  Flex,
  useColorModeValue,
  FlexProps,
  Button,
  Center,
} from "@chakra-ui/react";
import Image from "../Image/Image";
import { useRouter } from "next/router";

import { colors } from "../../styles/theme";

const PostCard = ({ idArticle, article }) => {
  const [hover, setHover] = useState(false);

  return (
    <Flex
      bg={useColorModeValue("white", "gray.800")}
      w="100%"
      h="100%"
      alignItems="center"
      justifyContent="center"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Box
        bg={useColorModeValue("white", "gray.800")}
        mx="0"
        display={{ lg: "flex" }}
        // shadow={{ lg: "lg" }}
        rounded={{ lg: "lg" }}
        w="full"
      >
        <Box
          w={{ lg: "100%" }}
          display={{ base: "none", lg: "flex" }}
          style={{
            backgroundImage: hover
              ? `url("${article.urlImage}`
              : `url("${article.urlImage}")`,
            // backgroundImage:  `url("${getUrlImage(article.hero_desktop.url)}`,
            backgroundRepeat: "no-repeat",

            backgroundSize: "cover",
            backgroundPosition: "50% 50%",
          }}
          justifyContent="flex-end"
          flexDirection="column"
          h={{ base: "350px", lg: "350px" }}
          pl={{ base: "0px", lg: "80px" }}
          pr={{ base: "0px", lg: "80px" }}
        ></Box>

        <Box w="100%" h="38vh" display={{ base: "flex", lg: "none" }}>
          <Image
            objectFit="cover"
            src={article.urlImage}
            // maxHeight={"640px"}
            //
            w="100%"
          />
        </Box>
      </Box>
    </Flex>
  );
};

export default PostCard;
