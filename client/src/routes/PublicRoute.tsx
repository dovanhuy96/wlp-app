import { lazy } from "react";
import { Route } from 'react-router-dom';
import Login from "../pages/Auth/Login";

const Home = lazy(() => import('../pages/Home/Home'));
const Todo = lazy(() => import('../pages/Todo/Todo'));
const Blog = lazy(() => import('../pages/Blog/Blog'));
const Funny = lazy(() => import('../pages/Funny/Funny'));


const routes = [
    {
        path: '/home',
        exact: true,
        isProtect: false,
        component: () => <Home />,
    },
    {
        path: '/todo',
        exact: true,
        isProtect: false,
        component: () => <Todo />,
    },
    {
        path: '/blog',
        exact: true,
        isProtect: false,
        component: () => <Blog />,
    },
    {
        path: '/funny',
        exact: true,
        isProtect: false,
        component: () => <Funny />,
    },
]


const renderRoutes = (routes: any, isAuth: boolean = false) => {
    return routes.map((route: any, index: any) => {
        const { path, exact, component, isProtect } = route;
        const loginComponent = () => <Login />;
        const componentRender = !isProtect
          ? component
          : isAuth
          ? component
          : loginComponent;
    
        return (
          <Route
            path={path}
            exact={exact}
            key={index}
            component={componentRender}
          />
        );
    });
}

export default {routes, renderRoutes};