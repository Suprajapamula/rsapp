/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Counter from './Counter';
import Todolist from './Todolist';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    children:[
      {
        path: "/counter",
        element:<Counter></Counter>,
      },
      {
        path: "/todolist",
        element:<Todolist></Todolist>,
      },
    ]
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);
reportWebVitals();*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Counter from './Counter';
import Todolist from './Todolist';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    children:[
      {
        path: "/counter",
        element:<Counter></Counter>,
      },
      {
        path: "/todolist",
        element:<Todolist></Todolist>,
      },
    ]
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <RouterProvider router={router}/>
);
reportWebVitals();
