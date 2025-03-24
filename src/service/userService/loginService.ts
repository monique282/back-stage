import * as jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';
import { invalidCredentialsError } from "@/erros/invalidCredentialsError";

async function loginPost({ email, password }) {
  const login = await loginRepository.findByEmailPassword(email);

  if (!login) {
    throw invalidCredentialsError("email não cadastrado");
  }

  const passwordMatch = await bcrypt.compare(password, login.password);
  if (!passwordMatch) {
    throw invalidCredentialsError("senha não corresposnde");
  }

  const token = jwt.sign( { userId: login.id, email: login.email }, process.env.JWT_SECRET,{ expiresIn: '2d' }  ); 
  const session = await sessionRepository.sessionToken(token, login.id);
  const list = {
    email: login.email,
    name: login.name,
  };
  return [list, session];
}

export const loginService = {
    loginPost
};