import express from 'express';
import postRoutes from './postRoutes'
import movieRoutes from './movieRoutes'
import userRoutes from './userRoutes'
import aclRoutes from './aclRoutes'
import HRBAC from '../acl/acl'
let rhbac = new HRBAC()
const routes = express.Router();
postRoutes(routes, rhbac);
movieRoutes(routes, rhbac);
userRoutes(routes, rhbac);
aclRoutes(routes);
module.exports = routes;