import Dashboard from '@Views/Dashboard';
import { IRoute } from './types';
import WebLayout from '@Views/WebLayout';

const appRoutes: IRoute[] = [
  // {
  //   path: '/',
  //   name: 'Dashboard ',
  //   component: Dashboard,
  //   authenticated: false,
  // },
   {
    path: '/',
    name: 'WebLayout ',
    component: WebLayout,
    authenticated: false,
  },
];

export default appRoutes;
