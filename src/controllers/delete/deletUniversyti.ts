import { Request, Response } from "express";

import UniversityRepository from "../../repositories";

const deleteUniversity = async (req: Request, res: Response) => {
  const id = req.params.id;
  const getAll = await new UniversityRepository().getAll();
  let country: string;

  for (let cont = 0; cont < getAll.length; cont++) {
    if (getAll[cont].id === id) {
      country = getAll[cont].country;
    }
  }

  if (country === "argentina") {
    const argentina = await new UniversityRepository().deleteInArgentina(id);
  } else if (country === "brasil") {
    const brasil = await new UniversityRepository().deleteInBrasil(id);
  } else if (country === "chile") {
    const chile = await new UniversityRepository().deleteInchile(id);
  } else if (country === "colombia") {
    const colombia = await new UniversityRepository().deleteInColombia(id);
  } else if (country === "paraguai") {
    const paraguai = await new UniversityRepository().deleteInParaguai(id);
  } else if (country === "peru") {
    const peru = await new UniversityRepository().deleteInPeru(id);
  } else if (country === "suriname") {
    const suriname = await new UniversityRepository().deleteInSuriname(id);
  } else if (country === "uruguai") {
    const uruguay = await new UniversityRepository().deleteInUruguay(id);
  } else {
    return res.status(404).json({
      err: "university is not in database probably is deleted before",
    });
  }
  return res.status(200).json({ smg: "University is deleted from database" });
};
export default deleteUniversity;
