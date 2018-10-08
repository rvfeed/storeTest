import express from 'express';
import userRoutes from './userRoutes'
import aclRoutes from './aclRoutes'
import storeRoutes from './storeRoutes'
import HRBAC from '../acl/acl'
let rhbac = new HRBAC()
const routes = express.Router();
userRoutes(routes, rhbac);
storeRoutes(routes, rhbac);
module.exports = routes;