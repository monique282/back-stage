import Joi from "joi";

export const processSchema = Joi.object({
    name: Joi.string()
        .required()
        .messages({
            'string.empty': 'O nome do processo é obrigatório',
            'any.required': 'O nome do processo é obrigatório'
        }),
    description: Joi.string()
        .allow('', null)
        .optional(),
    areaId: Joi.number()
        .integer()
        .positive()
        .required()
        .messages({
            'number.base': 'O ID da área deve ser um número',
            'number.integer': 'O ID da área deve ser um número inteiro',
            'number.positive': 'O ID da área deve ser um número positivo',
            'any.required': 'O ID da área é obrigatório'
        }),
    tools: Joi.array()
        .items(Joi.string())
        .required(),
    responsible: Joi.array()
        .items(Joi.string())
        .required(),
    documents: Joi.array()
        .items(Joi.string())
        .required()
}).options({
    abortEarly: false 
});

