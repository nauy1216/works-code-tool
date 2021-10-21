import {} from 'react-router-dom';
import Home from './home/index';
import LogicFlowCanvas from './canvas';

export const routes = [
  {
    path: '/',
    component: LogicFlowCanvas,
  },
  {
    path: '/home',
    component: Home,
  },
];
