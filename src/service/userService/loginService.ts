import * as jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';
import { invalidCredentialsError } from "@/erros/invalidCredentialsError";
import { loginRepository } from "@/repositories/userRepository/loginRepository";
import { sessionRepository } from "@/repositories/sessionsRepository";

async function loginPost(email: string, password: string ) {
  // if (!process.env.JWT_SECRET) {
  //   throw new Error("JWT_SECRET não está configurado");
  // }

  const login = await loginRepository.findByEmailPassword(email);
  if (!login) {
    throw invalidCredentialsError("email não cadastrado");
  }

  const passwordMatch = await bcrypt.compare(password, login.password);
  if (!passwordMatch) {
    throw invalidCredentialsError("Senha incorreta");
  }

  const token = jwt.sign( { userId: login.id, email: login.email }, process.env.JWT_SECRET,{ expiresIn: '2d' }  ); 
  const session = await sessionRepository.sessionToken(token, login.id);
  const list = {
    email: login.email,
  };
  return [list, session];
}

export const loginService = {
    loginPost
};