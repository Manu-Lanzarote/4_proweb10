//Este componente es para forzar a la página Signin a que se abra desde el principio. He usado el mismo principio para las diferentes secciones de la web Real State

import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollToTop(){
    const {pathname} = useLocation()

    useEffect(() => {
        window.scrollTop(0,0)
    }, [pathname]);

    return null;
}