import React, { useState } from 'react';
import { Image as ChakraImage, Skeleton } from '@chakra-ui/react';

const Image = ({ ...props }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    if (!isLoaded)
        return (
            <Skeleton minHeight={props.minHeight || '100px'} height={'100%'} width={'100%'}>
                <ChakraImage onLoadCapture={() => setIsLoaded(true)} {...props} />
            </Skeleton>
        );

    return <ChakraImage {...props} />;
};

export default Image;