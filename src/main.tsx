import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import React from 'react';
import ContentContainerComponent from './ContentContainerComponent.tsx';
import AboutUsComponent from './components/about-us/AboutUsComponent.tsx';
import ContactUsComponent from './components/contact-us/ContactUsComponent.tsx';
import ServicesComponent from './components/our-services/ServicesComponent.tsx';
import ResourcesComponent from './components/resources/resources.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <ContentContainerComponent />
      },
      {
        path: "about",
        element: <AboutUsComponent />
      },
      {
        path: "services",
        element: <ServicesComponent />
      },
      {
        path: "contact",
        element: <ContactUsComponent />
      },
      {
        path: "services/:serviceName",
        element: <ServicesComponent />
      }
      ,
      {
        path: "resources",
        element: <ResourcesComponent />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);