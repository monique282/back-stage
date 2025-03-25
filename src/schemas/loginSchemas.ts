import Joi from "joi";

export const LoginSchema = Joi.object({
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .required()
        .messages({
            'string.email': 'O email deve ser um endereço de email válido.',
            'string.empty': 'O email não pode estar vazio.',
            'any.required': 'O campo email é obrigatório.',
        }),

    password: Joi.string()
        .min(8)
        .max(30)
        .pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])/)
        .required()
        .messages({
            'string.empty': 'A senha não pode estar vazia.',
            'string.min': 'A senha deve ter pelo menos 8 caracteres.',
            'string.max': 'A senha deve ter no máximo 30 caracteres.',
            'string.pattern.base': 'A senha deve conter pelo menos uma letra maiúscula, uma minúscula, um número e um caractere especial.',
            'any.required': 'O campo senha é obrigatório.',
        }),
    
});