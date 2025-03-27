
import { treeComtroller } from '@/controllers/treeController';
import { authenticateToken } from '@/middlewares/authenticationTokenMiddleware';
import { checkAdminDeleteArea, checkAdminDeleteProcess, checkAdminPostArea, checkAdminPostProcess, checkAdminPutArea, checkAdminPutProcess } from '@/middlewares/checkAdminMiddleware';
import { validateBody } from '@/middlewares/validationMiddlewere';
import { AreaSchema } from '@/schemas/areaSchemas';
import { ProcessPutSchema, ProcessSchema } from '@/schemas/processSchemas';
import { Router } from 'express';


const TreeRoute = Router();

TreeRoute.get('/', treeComtroller.treeGet);
TreeRoute.get('/area', treeComtroller.treeAreaGet);
TreeRoute.delete('/deleteArea/:id', authenticateToken, checkAdminDeleteArea, treeComtroller.areaDelete)
TreeRoute.delete('/deleteProcess/:id', authenticateToken, checkAdminDeleteProcess,treeComtroller.processDelete)
TreeRoute.post('/postArea', authenticateToken, checkAdminPostArea, validateBody(AreaSchema), treeComtroller.areaPost )
TreeRoute.post('/postProcess', authenticateToken, checkAdminPostProcess, validateBody(ProcessSchema), treeComtroller.processPost)
TreeRoute.put('/:id', authenticateToken, checkAdminPutArea, validateBody(AreaSchema), treeComtroller.areaPut)
TreeRoute.put('/process/:id', authenticateToken, checkAdminPutProcess, validateBody(ProcessPutSchema), treeComtroller.processPut)

export { TreeRoute };
