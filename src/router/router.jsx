import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from "../Components/Home";
import Login from "../Components/Login/Login";
import User from "../Components/User/User";
import ProtectedRoute from "../Components/Helper/ProtectedRoute";
import Photo from "../Components/Photo/Photo";
import UserProfile from "../Components/User/UserProfile";
import NotFound from "../Components/NotFound";
import LoginCreate from '../Components/Login/LoginCreate';
import LoginLostPassword from '../Components/Login/LoginLostPassword';
import LoginResetPassword from '../Components/Login/LoginResetPassword';
import LoginForm from '../Components/Login/LoginForm';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
         path: 'login/*', 
         element: <Login />,
         children: [
            {index: true, element: <LoginForm />},
            {path: 'create', element: <LoginCreate />},
            {path: 'lost', element: <LoginLostPassword />},
            {path: 'reset', element: <LoginResetPassword />},
            {path: '*', element: <NotFound />},
         ]
      },
      { path: 'photo/:id', element: <Photo /> },
      { path: 'profile/:user', element: <UserProfile /> },
      { 
        path: 'account/*', 
        element: (
          <ProtectedRoute>
            <User />
          </ProtectedRoute>
        ) 
      },
      { path: '*', element: <NotFound /> }
    ]
  }
]);