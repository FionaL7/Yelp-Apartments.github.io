const Joi = require('joi');

module.exports.apartmentSchema = Joi.object({
    apartment: Joi.object({
    title: Joi.string().required(),
    price: Joi.number().required().min(0),
    location: Joi.string().required(),
    // images: Joi.string().required(),
    description: Joi.string().required(),
    BHK: Joi.string().valid('Studio', '1', '2', '3', 'Penthouse'),
    amenities: Joi.string()
    }).required(),
    deleteImages: Joi.array(),
})

module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        body: Joi.string().required()
    }).required()
})