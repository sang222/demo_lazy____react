import React from 'react';
const Demo = React.lazy(() => import('./components/demo'));
const Lazy = React.lazy(() => import('./components/Lazy'));

const routers = [
    {
        path: '/',
        component: Demo,
        exact: true
    },
    {
        path: '/lazy',
        component: Lazy,
        exact: true
    },
];

export default routers