import { validateBody } from '@/middlewares/validationMiddlewere';
import { LoginSchema } from '@/schemas/loginSchemas';
import { Router } from 'express';
import { ObjectSchema } from 'joi';


const UserRoute = Router();

UserRoute.post('/login', validateBody(LoginSchema as ObjectSchema<any>), loginController.loginPost);


export { UserRoute };
