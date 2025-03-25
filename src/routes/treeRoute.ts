
import { treeComtroller } from '@/controllers/treeController';
import { Router } from 'express';


const TreeRoute = Router();

TreeRoute.get('/', treeComtroller.treeGet);


export { TreeRoute };
