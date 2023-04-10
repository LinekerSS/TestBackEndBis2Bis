import { NextFunction, Request, Response } from "express";
import { AnySchema, ObjectSchema } from "yup";


interface CustomRequest<T> extends Request {
  validated: T;
}

const midleSchemaValidate =
  <T>(schema: ObjectSchema<any>) =>
  async (req: CustomRequest<T>, res: Response, next: NextFunction) => {
    try {
      // Check if req.body is defined before calling schema.validate()
      if (req.body !== undefined) {
        const validated = await schema.validate(req.body, {
          abortEarly: false,
          stripUnknown: true,
        });

        req.validated = validated;
      }

      return next();
    } catch (error) {
      return res.status(400).json({ error: error.errors });
    }
  };

export default midleSchemaValidate;







