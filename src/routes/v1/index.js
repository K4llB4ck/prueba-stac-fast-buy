const express = require('express');
const productRoute = require('./product.route');
const categoryRoute = require('./category.route');
const orderRoute = require('./order.route');
const router = express.Router();

const defaultRoutes = [
    {
        path: '/products',
        route: productRoute
    },
    {
        path:'/categories',
        route:categoryRoute
    },{
        path:'/orders',
        route:orderRoute
    }
];


defaultRoutes.forEach(route => {
    router.use(route.path, route.route);
});


module.exports = router;