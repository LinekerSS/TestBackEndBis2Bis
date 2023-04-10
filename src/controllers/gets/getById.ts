import { Request, Response } from "express";

import UniversityRepository from "../../repositories";

const getByid = async (req: Request, res: Response) => {
  const universityId = req.params.id;

  const idFinder = await new UniversityRepository().getAll();

  let idFound: any;

  let code: Response<any, Record<string, any>>;

  for (let cont = 0; cont < idFinder.length; cont++) {
    if (idFinder[cont].id === universityId) {
      idFound = idFinder[cont];
    }
  }

  if (idFound) {
    code = res.status(200).json({ idFound });
  } else
    code = res.status(404).json({ msg: "don't have any university found" });

  return code;
};
export default getByid;
