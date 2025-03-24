import { loginController } from '@/controllers/userController/loginController';
import { registerController } from '@/controllers/userController/registerController';
import { authenticateToken } from '@/middlewares/authenticationTokenMiddleware';
import { checkAdmin } from '@/middlewares/checkAdminMiddleware';
import { validateBody } from '@/middlewares/validationMiddlewere';
import { LoginSchema } from '@/schemas/loginSchemas';
import { RegisterSchema } from '@/schemas/registerSchemas';
import { Router } from 'express';
import { ObjectSchema } from 'joi';


const UserRoute = Router();

UserRoute.post('/login', validateBody(LoginSchema as ObjectSchema<any>), loginController.loginPost);
UserRoute.post('/register', authenticateToken, checkAdmin, validateBody(RegisterSchema as ObjectSchema<any>), registerController.registerPost);


export { UserRoute };
