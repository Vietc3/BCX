import { Box } from "@chakra-ui/react";
import { useNode } from "@craftjs/core";
import { useHover } from "../../Hooks/useHoverVersion2.ts";
export const Navigation9 = () => {
  const {
    connectors: { connect, drag },
  } = useNode();
  const { hoverProps, isHovered } = useHover({});
  const hoverStyle = {
    background: "#f4f5f7",
    cursor: "pointer",
    borderRadius: "10",
    border: "2px dashed blue",
  };
  return (
    <Box
      textAlign="center"
      backgroundImage="linear-gradient(90deg,#d31e4b,#6b2369);"
      py="10px"
      color="#FFFF"
      {...hoverProps}
      _hover={hoverStyle}
      ref={(ref) => connect(drag(ref))}
    >
      {`Shop TAX & DUTY-FREE* online 12-72 hours before your flight & pick up at the airport. For enquiries, WhatsApp us at +65-94628238 from 9am – 9pm (SGT). ​`}
    </Box>
  );
};
