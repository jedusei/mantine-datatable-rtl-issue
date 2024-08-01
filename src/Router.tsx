import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';

import '@mantine/core/styles.layer.css';
import 'mantine-datatable/styles.layer.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
