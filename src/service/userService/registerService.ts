import bcrypt from 'bcrypt';
import { invalidCredentialsError } from "@/erros/invalidCredentialsError";
import { RegisterRepository } from '@/repositories/userRepository/registerRepository';

async function registerPost(password: string, role: string, email: string) {
    const registerEmail = await RegisterRepository.searchingEmail(email);
    if (registerEmail) {
        throw invalidCredentialsError("Email já cadastrado");
    }

    const hashedPassword = await bcrypt.hash(password, 12)

    const register = await RegisterRepository.registerPost(hashedPassword, role, email);

    return register;
}

export const RegisterService = {
    registerPost
};