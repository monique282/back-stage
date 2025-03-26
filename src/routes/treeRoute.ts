
import { treeComtroller } from '@/controllers/treeController';
import { authenticateToken } from '@/middlewares/authenticationTokenMiddleware';
import { checkAdminDeleteArea, checkAdminDeleteProcess, checkAdminPostArea } from '@/middlewares/checkAdminMiddleware';
import { validateBody } from '@/middlewares/validationMiddlewere';
import { AreaSchema } from '@/schemas/areaSchemas';
import { Router } from 'express';


const TreeRoute = Router();

TreeRoute.get('/', treeComtroller.treeGet);
TreeRoute.delete('/deleteArea/:id', authenticateToken, checkAdminDeleteArea, treeComtroller.areaDelete)
TreeRoute.delete('/deleteProcess/:id', authenticateToken, checkAdminDeleteProcess,treeComtroller.processDelete)
TreeRoute.post('/postArea', authenticateToken, checkAdminPostArea, validateBody(AreaSchema), treeComtroller.areaPost )


export { TreeRoute };
