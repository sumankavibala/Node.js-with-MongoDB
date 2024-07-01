import Joi from "joi";

const validateProductDetails = Joi.object().keys({
  productID: Joi.number().required(),
  productName: Joi.string().required(),
  productSpecs: Joi.string().required(),
});

export { validateProductDetails };
