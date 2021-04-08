import {  useState, useRef, useEffect, useCallback } from 'react';

export const useHover = () => {
        const [hovered, setHovered] = useState();
      
        const mouseOver = useCallback(() => { 
          setHovered(true);
        }, []);
      
        const mouseOut = useCallback(() => {
          setHovered(false);
        }, []);
        return { mouseOver, mouseOut, hovered };
      }