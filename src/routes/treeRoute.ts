
import { treeComtroller } from '@/controllers/treeController';
import { authenticateToken } from '@/middlewares/authenticationTokenMiddleware';
import { Router } from 'express';


const TreeRoute = Router();

TreeRoute.get('/', treeComtroller.treeGet);
TreeRoute.delete('/delete/:id', authenticateToken, treeComtroller.areaDelete)


export { TreeRoute };
