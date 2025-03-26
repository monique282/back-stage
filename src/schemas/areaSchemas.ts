import Joi from "joi";

export const AreaSchema = Joi.object({
    name: Joi.string()
        .min(1)
        .required()
        .messages({
            'string.email': 'O nome deve ter no minimo 1 caractere.',
            'string.empty': 'O nome não pode estar vazio.',
            'any.required': 'O nome é obrigatório.',
        }),

    description: Joi.string()
        .min(5)
        .max(30)
        .required()
        .messages({
            'string.empty': 'A descrição não pode estar vazia.',
            'string.min': 'A descrição deve ter pelo menos 5 caracteres.',
            'string.max': 'A descrição deve ter no máximo 30 caracteres.',
            'any.required': 'O descrição é obrigatório.',
        }),

});