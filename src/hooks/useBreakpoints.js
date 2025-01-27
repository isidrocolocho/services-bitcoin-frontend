// Este archivo contiene un hook personalizado que permite obtener los breakpoints actuales del sistema.
import { useState, useEffect } from 'react';

// Función que permite obtener los breakpoints en valores booleanos
const getCurrentBreakpoints = () => {
    const width = window.innerWidth;

    return {
        name: getBreakpointName(width),
        mobile: width < 640,
        xs: width < 640,
        xsOnly: width < 640,
        sm: width >= 640 && width < 768,
        smAndDown: width < 768,
        smOnly: width >= 640 && width < 768,
        smAndUp: width >= 640,
        md: width >= 768 && width < 1024,
        mdAndDown: width < 1024,
        mdOnly: width >= 768 && width < 1024,
        mdAndUp: width >= 768,
        lg: width >= 1024,
        lgAndDown: width <= 1024,
        lgOnly: width >= 1024 && width < 1280,
        lgAndUp: width >= 1024,
        xl: width >= 1280,
        xlOnly: width >= 1280 && width < 1536,
        xlAndUp: width >= 1280,
    };
};

// Función que permite obtener el nombre del breakpoint actual
const getBreakpointName = (width) => {
    if (width >= 640) return 'sm';
    if (width >= 768) return 'md';        
    if (width >= 1024) return 'lg';
    if (width >= 1280) return 'xl';    
    if (width >= 1536) return '2xl';    
    return 'xs';
};

const useBreakpoints = () => {
    const [breakpoints, setBreakpoints] = useState(getCurrentBreakpoints());

    useEffect(() => {
        // Observador de cambios en los breakpoints del sistema
        window.addEventListener('resize', () => {
            setBreakpoints(getCurrentBreakpoints());
        });
    }, []);

    return breakpoints;
};

export default useBreakpoints;

