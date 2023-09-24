import { Home, Products } from '~/Pages';
import Login from '~/components/Form/Login';
import Register from '~/components/Form/Register';
import InformationProducts from '~/components/InformationsProducts/InformationProducts';
const publicRouter = [
    {
        path: '/',
        container: Home,
        childrenOnly: true,
    },
    {
        path: '/register',
        container: Register,
        childrenOnly: true,
    },
    {
        path: '/login',
        container: Login,
        childrenOnly: true,
    },
    {
        path: '/products',
        container: InformationProducts,
        childrenOnly: true,
    },
    {
        path: '/allProducts',
        container: Products,
        childrenOnly: true,
    },
];
export default publicRouter;
