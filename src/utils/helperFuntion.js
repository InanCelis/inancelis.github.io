import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useHelperFunction(title) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // chaging page title
    // if(title !== 'nothing'){
    //   document.title = `${title} Inan The Future`;
    // }
  }, [pathname]);
}
