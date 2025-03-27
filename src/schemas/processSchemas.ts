import Joi from "joi";

export const ProcessSchema = Joi.object({
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
        .items(Joi.string().trim().min(1)) 
        .min(1) 
        .required()
        .messages({
            'array.base': 'As ferramentas devem ser um array',
            'array.min': 'Pelo menos uma ferramenta deve ser informada',
            'any.required': 'As ferramentas são obrigatórias'
        }),
    responsible: Joi.array()
        .items(Joi.string().trim().min(1)) 
        .min(1) 
        .required()
        .messages({
            'array.base': 'Os responsáveis devem ser um array',
            'array.min': 'Pelo menos um responsável deve ser informado',
            'any.required': 'Os responsáveis são obrigatórios'
        }),
    documents: Joi.array()
        .items(Joi.string().trim().min(1)) 
        .required()
        .messages({
            'array.base': 'Os documentos devem ser um array',
            'any.required': 'Os documentos são obrigatórios'
        })
}).options({
    abortEarly: false
});


export const ProcessPutSchema = Joi.object({
    name: Joi.string()
        .required()
        .messages({
            'string.empty': 'O nome do processo é obrigatório',
            'any.required': 'O nome do processo é obrigatório'
        }),
    description: Joi.string()
        .allow('', null)
        .optional(),
    tools: Joi.array()
        .items(Joi.string().trim().min(1))
        .min(1)
        .required()
        .messages({
            'array.base': 'As ferramentas devem ser um array',
            'array.min': 'Pelo menos uma ferramenta deve ser informada',
            'any.required': 'As ferramentas são obrigatórias'
        }),
    responsible: Joi.array()
        .items(Joi.string().trim().min(1))
        .min(1)
        .required()
        .messages({
            'array.base': 'Os responsáveis devem ser um array',
            'array.min': 'Pelo menos um responsável deve ser informado',
            'any.required': 'Os responsáveis são obrigatórios'
        }),
    documents: Joi.array()
        .items(Joi.string().trim().min(1))
        .required()
        .messages({
            'array.base': 'Os documentos devem ser um array',
            'any.required': 'Os documentos são obrigatórios'
        })
}).options({
    abortEarly: false
});