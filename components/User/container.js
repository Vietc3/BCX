import { Box } from "@chakra-ui/react"
import { useNode } from '@craftjs/core';

export const ContainerComponent = ({background, padding = 0, children}) => {
  const {
    connectors: { connect, drag },
  } = useNode();

    return (
      <Box   ref={(ref) => connect(drag(ref))} overflowY="scroll" w="100%" h="90%" style={{margin: "5px 0", background, padding: `${padding}px`}}>
        {children}
      </Box>
    )
  }