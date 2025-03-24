import bcrypt from 'bcrypt';
import { invalidCredentialsError } from "@/erros/invalidCredentialsError";

async function registerPost(password: string, role: string, email: string) {
    const registerEmail = await registerRepository.searchingEmail(email);
    if (registerEmail) {
        throw invalidCredentialsError("Email já cadastrado");
    }

    const hashedPassword = await bcrypt.hash(password, 12)

    const register = await registerRepository.registerPost(hashedPassword, role, email);

    return register;
}

export const RegisterService = {
    registerPost
};