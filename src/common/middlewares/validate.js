export const validate = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, {
      abortEarly: false
    });

    if (error) {
      const formattedErrors = {};

      error.details.forEach(detail => {
        const field = detail.path[0]; 
        formattedErrors[field] = detail.message.replace(/"/g, '');
      });

      return res.status(400).json({
        status: false,
        message: 'Invalid request data',
        errors: formattedErrors
      });
    }

    next();
  };
};
