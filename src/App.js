import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import About from './components/About/About';
import Main from './components/layout/Main';
import Peoples from './components/Peoples/Peoples';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children:[
        {path: '/home', element: <Home></Home>},
        {path: '/product', element: <Products></Products>},
        {path: '/about', element: <About></About>},
        {path: '/peoples',
         loader: async()=>{return fetch('https://jsonplaceholder.typicode.com/users')},
         element:<Peoples></Peoples>}
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
