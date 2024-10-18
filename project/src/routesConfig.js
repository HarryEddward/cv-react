import {AboutPage} from "./pages/About";
import {ContactPage} from "./pages/Contact";
import {Error404Page} from "./pages/Error/Error404";
import {HomePage} from "./pages/Home";

const routesConfig = [
    {
      path: '/',
      element: HomePage,
      children: [],
    },
    {
      path: '/about',
      element: AboutPage,
      children: [],
    },
    {
        path: '/contact',
        element: ContactPage,
        children: [],
    },
    {
      path: '*',
      element: Error404Page,
      children: [],
    },
  ];
  
  export default routesConfig;
  