
import { treeComtroller } from '@/controllers/treeController';
import { authenticateToken } from '@/middlewares/authenticationTokenMiddleware';
import { checkAdmin } from '@/middlewares/checkAdminMiddleware';
import { Router } from 'express';


const TreeRoute = Router();

TreeRoute.get('/', treeComtroller.treeGet);
TreeRoute.delete('/deleteArea/:id', authenticateToken, checkAdmin, treeComtroller.areaDelete)
TreeRoute.delete('/deleteProcess/:id', authenticateToken, checkAdmin,treeComtroller.processDelete)


export { TreeRoute };
