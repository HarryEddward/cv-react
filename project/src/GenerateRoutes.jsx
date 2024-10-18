import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import routesConfig from './routesConfig';

export function GenerateRoutes() {
  return useRoutes(
    routesConfig.map(route => ({
      path: route.path,
      element: <route.element />,
      children: route.children.map(child => ({
        path: child.path,
        element: <child.element />,
      })),
    }))
  );
}
