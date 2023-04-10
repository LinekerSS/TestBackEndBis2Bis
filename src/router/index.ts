import { Router } from "express";
import midleSchemaValidate from "../middlewares";
import * as schemas from "../schemas";
import * as controllers from "../controllers";

const router = Router();

router.post("", midleSchemaValidate(schemas.registerSchema),
  controllers.registerUNiversity
);

router.get("id/:id", controllers.getByid);

router.get(":pagination/?country", controllers.getAllUniversity);

router.put(
  ":id",
  midleSchemaValidate(schemas.updateSchema),
  controllers.update
);

router.delete(":id", controllers.deleteUniversity);

export default router;
